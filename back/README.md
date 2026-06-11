# 资料库后端目录约定

`back/library` 是资料库文件的本地存储根目录，目录最多按三级组织：

```text
一级分类 / 二级资料夹 / 三级分类 / 文件
```

示例：

```text
小学/三年级资料/知识点总结/example.pdf
初中/初一资料/期末测试卷/example.pdf
```

本地后端 `server.js` 只允许访问 `back/library` 内部文件，上传时由前端传入当前三级分类路径。

## 高考志愿 AI 分析

本地后端通过 `/api/gaokao/analyze` 调用阿里千问兼容模式接口。不要把 API Key 写入前端或仓库，启动前在当前终端设置环境变量：

```powershell
$env:DASHSCOPE_API_KEY="你的阿里千问 API Key"
$env:DASHSCOPE_BASE_URL="https://dashscope.aliyuncs.com/compatible-mode/v1"
$env:DASHSCOPE_MODEL="qwen-plus"
node .\back\server.js
```

前端只调用本地接口，分析结果会以 JSON 保存并渲染成“张老师测评”报告。
