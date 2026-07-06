# 故事时间 — 给小孩用的静态听故事页面

## 文件结构
```
index.html        页面本体（打开就能看效果，双击也能在浏览器里预览）
audio/            放 mp3 音频文件的文件夹
CNAME             绑定自己域名用的文件（部署前记得改成你自己的域名）
```

## 页面现在有三个标签：故事 / 音乐 / 关于我

- **故事**、**音乐**是两个独立的列表，各自分页
- **关于我**是一个简单的自我介绍卡片

## 加新故事 / 新音乐
打开 `index.html`，找到 `STORIES` 或 `MUSIC` 这两个数组（在 `<script>` 里），
每一项加一行就行，不需要动别的代码，也不用自己指定颜色：

```js
{ title: "新故事标题", file: "audio/story-07.mp3" },
```

颜色会按 `COLORS` 列表的顺序自动循环分配(sage → rose → ochre → indigo → teal → plum → 再从 sage 开始)，
如果想换配色顺序，改 `COLORS` 这个数组就行。

## 分页
每页默认显示 12 个，超过这个数字会自动出现"上一页 / 下一页"。
想调整每页数量，改 `PAGE_SIZE` 这个数字(建议 10~15 之间)。

## 改"关于我"里的内容
找到 `ABOUT` 这个对象，改 `name`(名字)和 `bio`(自我介绍文字)就行，
`bio` 里想换行的话直接打 `\n`。

## 第一步：建 GitHub 仓库并开启 GitHub Pages
1. 在 GitHub 新建一个仓库，比如 `story-time`，设为 Public。
2. 把这个文件夹里的所有文件（`index.html`、`audio/`、`CNAME`）上传到仓库根目录。
3. 进仓库 `Settings → Pages`。
4. Source 选 `Deploy from a branch`，Branch 选 `main`，目录选 `/ (root)`，保存。
5. 等一两分钟，页面会出现在 `https://你的用户名.github.io/story-time/` 这个地址，
   先用这个地址确认页面和音频能正常播放。

## 第二步：绑定自己的域名（通过 Cloudflare）
假设你想用 `story.你的域名.com` 这个子域名：

1. **改 CNAME 文件**：把仓库里的 `CNAME` 文件内容改成 `story.你的域名.com`（只写这一行，没有 http:// 前缀）。
2. **GitHub 那边**：`Settings → Pages → Custom domain`，填入同样的 `story.你的域名.com`，保存。
   GitHub 会自动检测 DNS，检测通过后勾选 **Enforce HTTPS**（可能要等 DNS 生效后才能勾）。
3. **Cloudflare 那边**：登录 Cloudflare，进入你域名的 DNS 设置，新增一条记录：
   - 类型：`CNAME`
   - 名称：`story`（也就是子域名前缀）
   - 目标：`你的用户名.github.io`
   - 代理状态：**建议先选 "仅 DNS"（灰色云朵）**，等 GitHub Pages 的 HTTPS 证书签发成功、页面能正常用 https 打开之后，
     再考虑要不要打开橙色云朵代理（打开代理的话，Cloudflare 的 SSL/TLS 加密模式要设成 **Full**，
     不要用 Flexible，不然容易出现重定向循环）。
4. 等待几分钟到几十分钟 DNS 生效后，用 `https://story.你的域名.com` 打开页面确认正常。

如果你想直接用主域名（不带 story 这种前缀），CNAME 记录换成 `@`，但要注意 Cloudflare 对根域名用 CNAME
有专门的 "CNAME flattening" 处理，一般不需要额外配置，正常新增 CNAME 记录即可。

## 小提示
- mp3 文件不用转换格式，浏览器（包括手机浏览器）原生就能播放。
- 如果音频文件比较大，第一次点击播放会有几秒缓冲，属于正常现象。
- 想让小孩自己在平板/手机上用，可以把这个网址加到主屏幕，效果就跟一个小 App 差不多。
"# micah-story-time" 
