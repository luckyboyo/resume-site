# resume-site

方子悦的个人简历与项目作品集。项目使用 Next.js、TypeScript 和 Tailwind CSS 构建，并通过静态导出部署到 Nginx。

## 本地开发

```bash
npm ci
npm run dev
```

浏览器访问 `http://localhost:3000`。

## 质量检查

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run build` 会在 `out/` 目录生成可由 Nginx直接托管的静态文件。

## 主要目录

```text
src/
├─ app/          # 页面、路由、全局布局与样式
├─ components/   # 布局、页面区块和通用 UI 组件
├─ content/      # 教育、经历、项目和技能数据
└─ types/        # 内容数据的 TypeScript 类型
```

项目详情页由 `src/app/projects/[slug]/page.tsx` 统一生成，项目数据集中维护在 `src/content/projects.ts`。

## 当前静态路由

- `/`
- `/projects/langgraph-software-agent/`
- `/projects/rag-knowledge-base/`

## 隐私约定

公开源码中不保存手机号、私人邮箱或原始简历文件。需要公开简历 PDF 时，应先生成单独的脱敏版本。
