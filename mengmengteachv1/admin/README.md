# 管理端设计

管理端只负责资料进入系统后的生产流程：上传、解析、编辑、分类、发布。

## 核心原则

- 原始上传文件只保存在管理端私有目录。
- 用户端不能读取原始上传文件。
- 上传文件必须先解析成统一 JSON。
- 未发布资料只能在管理端查看。
- 用户端将来只能读取 `published` 状态的数据。
- 所有字段必须有默认值，避免缺字段导致页面崩溃。

## 流程

```text
上传文件 -> 生成 upload 记录 -> 解析为 draft JSON -> 管理端编辑 -> 分类 -> 校验 -> 发布
```

## 资料状态

```text
uploaded   已上传，未解析
parsed     已解析，待编辑
draft      草稿，可编辑
review     待发布检查
published  已发布，用户端可读取
archived   已归档，用户端不可读取
```

## 文件存储建议

```text
back/storage/private/uploads/   原始上传文件
back/storage/drafts/            结构化草稿 JSON
back/storage/published/         已发布 JSON
```

