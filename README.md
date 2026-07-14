# Micah's Inventory

## 结构说明

这个版本把页面拆成了更容易长期维护的三部分：

- [index.html](index.html)：页面结构
- [styles.css](styles.css)：样式
- [data.js](data.js)：内容数据，例如故事、阅读、音乐、体育介绍

## 以后怎么更新内容

想加故事、音乐、阅读内容时，直接改 [data.js](data.js) 即可。

例如：

```js
stories: [
  { title: '新故事标题', file: 'audio/new-story.mp3' }
]
```

## 以后怎么更新样式

如果想改颜色、按钮、卡片样式，直接改 [styles.css](styles.css) 即可。

## 部署说明

这个站点已经适合直接部署到 GitHub Pages。

如果你以后要继续改动：
1. 本地修改内容
2. 预览效果
3. 提交并推送到 GitHub
4. GitHub Pages 会自动更新
