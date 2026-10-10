# product-site · 服装展示站

基于 **Astro 4 + Splide 轮播** 搭建的服装/服饰产品展示网站（演示项目）。

## 快速开始

```bash
npm install
npm run dev        # 开发预览 http://localhost:4321
npm run build      # 生成静态站点到 dist/
npm run preview    # 预览构建产物
```

## 站点结构

| 路径 | 说明 |
| --- | --- |
| `/` | 首页：主视觉轮播、分类导览、新品轮播、热卖精选、店铺故事 |
| `/products/` | 全部商品，支持 `?category=jacket/top/bottom/dress` 分类筛选 |
| `/product/[slug]/` | 商品详情：颜色/尺码/数量选择、加入购物车（演示） |
| `/about/` | 关于店铺：理念、服务承诺、联系方式 |

## 目录说明

```
product-site/
├── public/images/products/   # 商品图片（本地）
├── src/
│   ├── data/site.ts          # ★ 站点配置：店名、电话、地址、公告
│   ├── data/products.ts      # ★ 商品数据：增删改商品就在这里
│   ├── layouts/Layout.astro  # 全局布局（含 Splide 样式引入）
│   ├── components/           # Header / Footer / 商品卡片 / 轮播组件
│   ├── pages/                # 首页、列表页、详情页、关于页、404
│   └── styles/global.css     # 全局样式与设计令牌
├── astro.config.mjs
└── package.json
```

## 自定义指南

- **换店名 / 电话 / 地址**：编辑 `src/data/site.ts`
- **换商品**：编辑 `src/data/products.ts`，图片放入 `public/images/products/` 并以 `/images/products/xxx.jpg` 引用
- **换配色**：编辑 `src/styles/global.css` 顶部的 `:root` 变量
- **主视觉轮播**：编辑 `src/components/HeroCarousel.astro`

> 说明：站点内商品、价格、联系方式均为示例数据，替换 `src/data/site.ts` 与 `src/data/products.ts` 即可接入真实信息。
