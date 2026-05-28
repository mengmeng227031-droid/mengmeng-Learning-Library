# 蒙蒙学习库 mengmengteach 项目说明

## 1. 项目定位

`mengmengteach` 是「蒙蒙学习库」Windows 客户端 / Web MVP 的静态原型项目。当前阶段目标是先做一个可以直接用浏览器打开的首页界面，后续再逐步升级为动态网页，并进一步封装成 Windows exe 客户端。

当前打开方式：

```text
file:///D:/Projects/mengmengteach/index.html
```

项目路径：

```text
D:\Projects\mengmengteach
```

## 2. 当前文件结构

```text
mengmengteach/
├─ index.html              # 首页结构
├─ styles.css              # 首页视觉样式
├─ script.js               # 页面数据和交互逻辑
├─ AGENTS.md               # 给 Codex/其他 AI 的项目规则
├─ PROJECT_GUIDE.md        # 本说明文件
├─ assets/
│  ├─ course-*.png         # 当前课程封面图
│  └─ brand/
│     ├─ brand-logo.png
│     ├─ brand-mascots.png
│     ├─ brand-cover.png
│     └─ brand-concept-icons.png
└─ brand/
   ├─ mengmeng-visual-manual.png  # 完整品牌视觉手册
   └─ BRAND_GUIDE.md              # 品牌资产说明
```

## 3. 品牌视觉规则

后续生成任何页面、组件、课程卡片、客户端界面时，必须优先参考：

```text
brand/mengmeng-visual-manual.png
AGENTS.md
brand/BRAND_GUIDE.md
```

主色来自视觉手册：

```text
#4D8BFF  蓝色
#FF6EC7  粉色
#FFC83D  黄色
#37D2C6  青色
#7B61FF  紫色
```

辅助色：

```text
#FF8A42  橙色
#A0E75A  草绿
#FF6F91  珊瑚粉
#6AD4FF  天蓝
#B8A0FF  浅紫
```

中性色：

```text
#333333  标题
#666666  正文
#999999  弱文字
#CCCCCC  边框
#F5F7FA  背景
```

视觉关键词：

```text
儿童学习、快乐探索、智慧成长、圆润、明亮、干净、轻盈、有趣但不幼稚
```

可用装饰元素：星星、爱心、音符、星球、弧线、圆形、圆角方形、三角形、叶片。

## 4. 当前页面模块

`index.html` 当前包含：

- 左侧导航
- 顶部问候区
- 搜索框
- 通知按钮
- 推荐内容课程卡片
- 快速入口
- 最近学习
- Toast 提示

`万事通` 和 `一对一学习` 已按要求暂时删除，后期用户明确要求时再恢复。

## 5. 数据驱动位置

页面数据集中在 `script.js`：

```text
navItems       # 左侧导航
courses        # 推荐课程卡片
quickEntries   # 快速入口
recentItems    # 最近学习
```

后续接动态接口时，优先替换这些数组的数据来源，不要先重写整个页面。

建议升级路径：

```text
静态数组 -> fetch 本地 JSON -> fetch 后端 API -> React/Vite 客户端 -> Tauri/Electron exe
```

## 6. 后续编辑规则

- 优先保持静态 HTML/CSS/JS 可直接打开。
- 不要引入构建工具，除非用户明确要求升级为 React/Vite。
- 不要删除品牌手册和 `AGENTS.md`。
- 不要使用深色商务风、重渐变、廉价 AI 占位图。
- 新页面必须符合品牌色和吉祥物体系。
- 课程卡片、入口、学习记录应继续数据驱动。
- 改完后至少用浏览器打开 `index.html` 检查页面是否正常。

## 7. 给新对话的接手提示

如果在新的 Codex 对话里继续编辑，可以直接说：

```text
请读取 D:\Projects\mengmengteach\PROJECT_GUIDE.md 和 AGENTS.md，继续编辑蒙蒙学习库客户端 MVP。所有视觉必须参考 brand/mengmeng-visual-manual.png。
```

然后再提出具体任务，例如：

```text
按照品牌视觉手册，重新设计首页推荐课程区。
```

或：

```text
把当前静态首页升级成 Vite + React，但保持视觉和数据结构不变。
```
