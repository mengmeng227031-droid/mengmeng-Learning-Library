# 蒙蒙学习库云端 MVP 说明

## 第一版技术栈

- 前端：静态 HTML/CSS/JavaScript
- 部署：Netlify 免费托管
- 后端：Netlify Functions
- 数据库：Supabase Postgres
- 登录：账号/手机号 + 密码，不接短信验证码
- 登录态：HttpOnly Cookie + `sessions` 表
- 数据：权限、资料、学习进度、练习正确率都存 Postgres

## 必须配置的环境变量

在 Netlify 项目环境变量里配置 Supabase transaction pooler 连接串：

```text
DATABASE_URL=postgresql://postgres.xxxxxx:你的密码@aws-xxx.pooler.supabase.com:6543/postgres?pgbouncer=true
```

不要把 `DATABASE_URL` 写入代码或提交到 Git。

## 建表

确认数据库后，在 Supabase SQL Editor 中执行：

```text
migrations/001_init.sql
```

如需导入第一批 20 个学生账号，继续执行：

```text
migrations/002_seed_students.sql
```

这份 SQL 只包含密码哈希。明文初始密码保存在本机：

```text
local/student-accounts.csv
```

`local/` 已加入 `.gitignore`，不要提交到 GitHub。

这是实际建表动作，执行前先确认数据库环境。

## 创建学生账号

本地生成 SQL：

```powershell
node .\scripts\create-user-sql.mjs --username=student001 --password=初始密码 --name=张小萌 --phone=13800138000
```

把输出 SQL 复制到 Supabase SQL Editor 执行。页面登录时可输入 `student001` 或手机号，再输入初始密码。

## 数据同步方式

- 用户登录后调用 `/api/me` 获取用户、权限、学习进度。
- 上传资料后写入 `resources` 表，前端调用 `/api/resources` 自动展示可见资料。
- 学习页面调用 `/api/progress` 更新学习进度。
- 练习题提交调用 `/api/practice-attempts` 记录答案、正确率、用时。

## 常用接口

```text
POST /api/auth/login
POST /api/auth/logout
GET  /api/me
GET  /api/resources
POST /api/resources              老师/管理员登记资料
POST /api/admin/permissions      老师/管理员授权资料或课程
GET  /api/progress
POST /api/progress
POST /api/practice-attempts
```

## 后期报告

先采集 `practice_attempts` 原始记录，后续按周期汇总到 `learning_reports`：

- 学习次数
- 单元完成度
- 正确率
- 平均用时
- 薄弱题型或知识点
- 最近学习时间
