import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FILE_SIZE_BYTES = 20 * 1024 * 1024; // 20MB

function safeFileName(originalName: string): string {
  const baseName = path.basename(originalName, path.extname(originalName));
  const ext = path.extname(originalName).toLowerCase() || ".pdf";
  const normalizedExt = ext === ".pdf" ? ext : ".pdf";
  const safeBase = baseName
    .replace(/[^\w\u4e00-\u9fa5-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);

  const timestamp = Date.now();
  return `${safeBase || "document"}-${timestamp}${normalizedExt}`;
}

export async function POST(request: Request) {
  try {
    const uploadToken = process.env.UPLOAD_PDF_TOKEN;
    const authHeader = request.headers.get("authorization");
    const tokenFromHeader = authHeader?.replace(/^Bearer\s+/i, "").trim();

    if (!uploadToken) {
      return NextResponse.json(
        { error: "服务器未配置 UPLOAD_PDF_TOKEN" },
        { status: 500 }
      );
    }

    if (!tokenFromHeader || tokenFromHeader !== uploadToken) {
      return NextResponse.json({ error: "未授权上传" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "请提供 PDF 文件" }, { status: 400 });
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "仅支持 PDF 格式" }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json(
        { error: "文件过大，请控制在 20MB 以内" },
        { status: 400 }
      );
    }

    const fileName = safeFileName(file.name);
    const uploadDir = path.join(process.cwd(), "public", "uploads", "pdf");
    const filePath = path.join(uploadDir, fileName);

    await fs.mkdir(uploadDir, { recursive: true });
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      fileName,
      url: `/uploads/pdf/${fileName}`,
    });
  } catch (error) {
    console.error("PDF upload failed:", error);
    return NextResponse.json({ error: "上传失败，请稍后重试" }, { status: 500 });
  }
}
