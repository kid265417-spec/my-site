"use client";

import { FormEvent, useMemo, useState } from "react";
import { FileUp, Lock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { GlassCard } from "@/components/glass-card";

export default function UploadPdfPage() {
  const [token, setToken] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");

  const fileName = useMemo(() => file?.name ?? "", [file]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setUploadedUrl("");

    if (!token.trim()) {
      setMessage("请先输入上传令牌。");
      return;
    }

    if (!file) {
      setMessage("请先选择一个 PDF 文件。");
      return;
    }

    if (file.type !== "application/pdf") {
      setMessage("仅支持 PDF 文件。");
      return;
    }

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload-pdf", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.trim()}`,
        },
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) {
        setMessage(result.error ?? "上传失败");
        return;
      }

      setMessage("上传成功！");
      setUploadedUrl(result.url ?? "");
      setFile(null);
    } catch {
      setMessage("上传失败，请稍后重试。");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="上传 PDF"
        subtitle="仅持有令牌的管理员可以上传。访客只能查看公开文件。"
        icon={<FileUp className="w-8 h-8 text-white" />}
      />

      <GlassCard>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-white/80 text-sm mb-2 inline-flex items-center">
              <Lock className="w-4 h-4 mr-2" />
              上传令牌
            </label>
            <input
              type="password"
              className="glass-input"
              value={token}
              onChange={(event) => setToken(event.target.value)}
              placeholder="请输入 UPLOAD_PDF_TOKEN"
            />
          </div>

          <div>
            <label className="text-white/80 text-sm mb-2 block">选择 PDF 文件</label>
            <input
              type="file"
              accept="application/pdf,.pdf"
              onChange={(event) => setFile(event.target.files?.[0] ?? null)}
              className="glass-input file:mr-3 file:px-3 file:py-1.5 file:rounded-lg file:border-0 file:bg-white/20 file:text-white"
            />
            {fileName ? <p className="text-white/50 text-xs mt-2">已选择：{fileName}</p> : null}
          </div>

          <button
            type="submit"
            disabled={isUploading}
            className="glass-btn disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isUploading ? "上传中..." : "上传 PDF"}
          </button>

          {message ? <p className="text-white/80 text-sm">{message}</p> : null}
          {uploadedUrl ? (
            <p className="text-white/80 text-sm">
              文件地址：
              <a
                href={uploadedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 underline ml-1"
              >
                {uploadedUrl}
              </a>
            </p>
          ) : null}
        </form>
      </GlassCard>
    </div>
  );
}
