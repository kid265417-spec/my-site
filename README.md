# 光影与代码 - 个人作品集网站

一个融合摄影美学与AI探索的数字策展空间。采用简约艺术风格结合毛玻璃效果，展现作为摄影师、思考者、分享者和AI探索者的多元身份。

![网站预览](./preview.png)

## 功能特性

- **摄影作品展示** - 分类展示摄影作品集，支持风景、人像、街拍、建筑、黑白等分类
- **AI知识分享** - 深度学习、大语言模型、计算机视觉等AI领域知识文章
- **资源分享中心** - 精选工具、软件、网站推荐（开发工具、设计资源、AI工具等）
- **个人博客** - 技术思考、摄影感悟、生活记录

## 技术栈

- **框架**: Next.js 15 + React 19
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **部署**: 静态导出（可部署到 Vercel、Netlify、GitHub Pages 等）

## 设计风格

- **毛玻璃效果** - 使用 backdrop-blur 实现精致的玻璃态设计
- **渐变背景** - 动态渐变光晕营造艺术氛围
- **响应式布局** - 完美适配桌面、平板、手机
- **流畅动画** - 页面切换和交互动画增强用户体验

## 快速开始

### 1. 安装依赖

```bash
cd my-site
npm install
```

### 2. 开发模式

```bash
npm run dev
```

访问 http://localhost:3000 查看网站

### 3. 构建

```bash
npm run build
```

构建后的文件在 `dist` 目录，可直接部署

## 项目结构

```
my-site/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 首页
│   ├── layout.tsx         # 根布局
│   ├── globals.css        # 全局样式
│   ├── photography/       # 摄影作品页面
│   ├── ai-knowledge/      # AI知识分享页面
│   ├── resources/         # 资源分享页面
│   ├── blog/              # 博客页面
│   └── upload-pdf/        # PDF 上传页面
├── components/            # 可复用组件
│   ├── glass-card.tsx     # 毛玻璃卡片组件
│   ├── navigation.tsx     # 导航组件
│   ├── gradient-background.tsx  # 渐变背景
│   ├── page-header.tsx    # 页面标题
│   └── section-title.tsx  # 章节标题
├── lib/                   # 工具函数和数据
│   └── data.ts            # 内容数据
├── public/                # 静态资源
│   └── images/            # 图片资源
├── next.config.ts         # Next.js 配置
├── tailwind.config.ts     # Tailwind 配置
└── package.json           # 项目依赖
```

## 自定义内容

### 修改摄影作品

编辑 `lib/data.ts` 中的 `photos` 数组：

```typescript
export const photos: Photo[] = [
  {
    id: "1",
    title: "你的作品标题",
    description: "作品描述",
    category: "风景", // 风景/人像/街拍/建筑/黑白
    image: "/images/photos/your-image.jpg",
    date: "2024-12-01",
    location: "拍摄地点",
  },
  // ...
];
```

### 修改AI文章

编辑 `lib/data.ts` 中的 `aiKnowledge` 数组

### 修改资源推荐

编辑 `lib/data.ts` 中的 `resources` 数组

### 修改博客文章

编辑 `lib/data.ts` 中的 `blogPosts` 数组

## 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署

### Netlify

1. 将代码推送到 GitHub
2. 在 Netlify 选择 "New site from Git"
3. 构建设置：Build command: `npm run build`, Publish directory: `dist`

### GitHub Pages

```bash
npm run build
# 将 dist 目录内容推送到 gh-pages 分支
```

## 自定义配置

### 修改网站标题和描述

编辑 `app/layout.tsx`：

```typescript
export const metadata: Metadata = {
  title: "你的网站标题",
  description: "你的网站描述",
};
```

### 修改颜色主题

编辑 `tailwind.config.ts` 和 `app/globals.css`

### 修改渐变背景

编辑 `components/gradient-background.tsx`

## 未来扩展

- [ ] 集成 CMS（如 Sanity、Strapi）管理内容
- [ ] 添加文章详情页 Markdown 支持
- [ ] 集成真实 AI 功能
- [ ] 添加在线商店模块
- [ ] 添加评论系统
- [ ] 添加搜索功能

## 许可证

MIT License

---

如有问题或建议，欢迎交流！