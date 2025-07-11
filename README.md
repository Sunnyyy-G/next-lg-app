This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 项目说明案例
```
my-next-app/
├── node_modules/       # 项目依赖的第三方库
├── public/             # 静态资源文件夹
│   ├── favicon.ico     # 网站图标
│   └── ...             # 其他静态资源（如图片、字体等）
├── app/                # 应用路由目录（核心）
│   ├── layout.js       # 根布局组件
│   ├── page.js         # 首页组件
│   ├── about/          # 关于页面
│   │   └── page.js     # 关于页面组件
│   ├── blog/           # 博客页面
│   │   ├── page.js     # 博客列表页
│   │   └── [slug]/     # 动态路由
│   │       └── page.js # 博客详情页
│   └── ...             # 其他页面和路由
├── components/         # 可复用的 React 组件
├── styles/             # 样式文件
├── utils/              # 工具函数
├── package.json        # 项目配置和依赖管理
├── package-lock.json   # 依赖的精确版本锁定文件
├── next.config.js      # Next.js 配置文件
└── README.md           # 项目说明文档
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## 内容说明

- 包含了一个 Next.js 应用程序的目录结构，以及一些基本的 Next.js 功能和 API 的示例。
- 如：路由、动态路由、tailwind css
- 包含了一些性能优化，如：防抖（debounce）节流(throttle)、useEffect(useMemo、useCallback、useRef、useContext、useReducer、useImperativeHandle、useLayoutEffect、useDebugValue、useTransition、useDeferredValue、useId、useMutationEffect 后续继续输出)
- 功能上包含：获取数据、搜索、Ajax XMLHttpRequest(Fetch API、axios、WebSocket 后续补充)
 