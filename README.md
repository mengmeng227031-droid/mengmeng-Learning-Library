# 蒙蒙学习库

蒙蒙学习库是面向儿童学习场景的 Windows 客户端 / Web MVP 原型。当前以静态 `HTML/CSS/JavaScript` 页面为主体，并预留 Netlify Functions + Supabase Postgres 的云端账号、权限、学习进度与练习记录能力。

## 当前功能

- 品牌化首页、课程入口、最近学习记录
- 登录页：账号/手机号 + 密码登录
- 资料库：本地目录浏览、文件展示与上传接口
- 英文学习、自然拼读、口算出题、好句查询、高考志愿测评等页面入口
- 云端 MVP 数据结构：用户、权限、资料、学习进度、答题记录、学习报告

## 技术栈

- 前端：静态 `HTML + CSS + JavaScript`
- 本地后端：Node.js `back/server.js`
- 云端部署：Netlify
- 云端接口：Netlify Functions
- 数据库：Supabase Postgres
- 登录态：HttpOnly Cookie + `sessions` 表

## 本地运行

直接打开静态首页：

```text
index.html
```

如需使用资料库上传、本地文件接口或高考分析接口，启动本地后端：

```powershell
node back/server.js
```

默认资料目录：

```text
back/library
```

## 云端准备

1. 在 Supabase 创建 Postgres 数据库。
2. 在 Supabase SQL Editor 执行：

```text
migrations/001_init.sql
```

3. 在 Netlify 环境变量中配置：

```text
DATABASE_URL=你的 Supabase transaction pooler 连接串
```

4. 生成学生账号 SQL：

```powershell
node .\scripts\create-user-sql.mjs --username=student001 --password=初始密码 --name=学生昵称 --phone=手机号
```

5. 将输出 SQL 复制到 Supabase SQL Editor 执行。

## 部署说明

部署前精简副本保存在：

```text
D:\Projects\mengmengteachv1.1
```

不上传这些本地生成或占空间资源：

- `.git`
- `node_modules`
- `.netlify`
- `outputs/`
- `音标练习/cards/`
- 日志、预览截图、Python 缓存

这些资源属于本地生成产物或大体积卡片图片，不影响当前主网页部署。

## 目录说明

- `index.html`、`styles.css`、`script.js`：主页面
- `login.html`、`login-account.js`：登录页
- `netlify/functions/`：云端 API
- `migrations/`：数据库建表脚本
- `docs/cloud-mvp.md`：云端 MVP 说明
- `back/`：本地资料库后端
- `assets/`：品牌、课程和页面资源
- `data/`：离线学习数据
- `scripts/`：辅助脚本

## 开发原则

第一版保留静态页面优势，只把用户身份、权限、资料展示、学习进度、答题记录等必须动态化的部分接入 API 和数据库。后续上传资料后写入 `resources` 表，用户登录后根据 `permissions` 自动展示可访问内容。
