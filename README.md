# Bo Peng — 个人学术主页（v2，2026 年 11 月）

纯静态网页，不需要任何构建工具，直接放到 GitHub Pages 即可。旧版在同级的 `homepage/` 文件夹里，未做任何改动。

## 文件结构

```
homepage_v2/
├── index.html                 整个页面（内容都在这里改）
├── .nojekyll                  告诉 GitHub Pages 直接发布文件，不做 Jekyll 处理
├── files/BoPeng_CV.pdf        主页上“CV”按钮下载的文件（= CV/BoPeng_CV_v2.pdf）
└── assets/
    ├── css/site.css           样式（颜色、字体、版式都在文件开头的变量里）
    ├── js/site.js             两个小功能：邮箱防爬虫、点击论文图片放大
    ├── fonts/                 自托管字体（不依赖 Google Fonts，国内访问不受影响）
    └── img/
        ├── bo-peng.webp/.jpg  头像（4:5）
        ├── gyroid.svg         首屏右侧的梯度 Gyroid 截面图（由方程生成）
        ├── favicon.svg, apple-touch-icon.png, og-card.png（微信/社交平台分享卡片）
        ├── pubs/              论文配图：xxx.webp 为缩略图，xxx-full.webp 为点击放大后的大图
        └── gallery/           会议照片
```

## 本地预览

直接双击 `index.html` 即可（页面里的相对路径在本地和线上一样可用）。双击打开时浏览器控制台可能有字体预加载的提示，这是 `file://` 协议的限制，部署到 GitHub 后不会出现。也可以用本地服务器预览（效果与线上一致）：

```bash
cd homepage_v2
python -m http.server 8000      # 然后浏览器打开 http://localhost:8000
```

## 发布位置

- 仓库：https://github.com/Bop2000/BoPeng-HomePage （本文件夹就是这个仓库的本地副本，`main` 分支）
- 网址：https://bop2000.github.io/BoPeng-HomePage/
- GitHub Pages 设置：Settings → Pages → Deploy from a branch → `main` / `(root)`

### 修改后如何发布

在本文件夹里改好文件后，用 Git Bash 执行：

```bash
cd /e/WorkSpace/CV_and_Homepage/homepage_v2
git add -A
git commit -m "Update homepage"
git push
```

更省事的做法：直接双击上一级文件夹里的 `publish_homepage.bat`，它会自动完成上面三步。

推送后约 1 分钟网页自动更新（浏览器强制刷新 Ctrl+F5 可看到新版）。也可以用 GitHub Desktop 或 VS Code 打开这个文件夹，点 Commit 和 Push。

以后如果想要更短的网址 `https://bop2000.github.io`，可以把仓库改名为 `Bop2000.github.io`，再把 `index.html` 里所有 `https://bop2000.github.io/BoPeng-HomePage/` 改成新网址。

## 日常更新

**添加一篇带图的论文**：在 `index.html` 里复制一整段 `<article class="pub"> … </article>`，改标题、作者、期刊、DOI、一句话简介和标签；配图准备两张：

- 缩略图：宽 760 px 左右，比例接近 16:10，存为 `assets/img/pubs/年份-期刊-关键词.webp`
- 大图：宽 1600–1800 px，存为同名加 `-full.webp`

没有 WebP 工具时也可以直接用 `.jpg`/`.png`，把 `index.html` 里的文件名改成对应后缀即可。

**添加到完整论文列表**：在“Show the complete list”里的 `<ol class="biblio" reversed>` 最上面加一条 `<li>`，编号会自动递增。

**更新新闻**：在 News 的第一个 `<ul>` 最上面加一条；旧的条目可以挪到“Earlier news”里。

**更新 CV**：重新编译 `CV/BoPeng_CV_v2.tex` 后，用新 PDF 覆盖 `files/BoPeng_CV.pdf`。

**引用数**：Publications 开头写的是 2026 年 11 月 Google Scholar 的数字（973 次引用，h-index 12），需要时手动更新。

## 隐私

- 主页没有放手机号（CV PDF 里保留）。
- 邮箱地址由 `site.js` 在浏览器里拼出来，HTML 源码里不出现完整邮箱，可以减少爬虫收集的垃圾邮件。改邮箱时修改 `data-u`（@ 前）和 `data-d`（@ 后）两处属性，以及 Contact 里显示的 `pengb21 [at] tsinghua.org.cn` 文字。

## 字体与图标许可

- Instrument Sans：SIL Open Font License 1.1（`assets/fonts/OFL-InstrumentSans.txt`）。
- BP Serif：IBM Plex Serif 的子集（只保留拉丁字符以减小体积）。按 OFL 规定，修改过的字体不能再使用保留名 “Plex”，所以改名为 BP Serif（`assets/fonts/OFL-IBMPlex.txt`）。
- 图标：Font Awesome Free，CC BY 4.0（页脚已注明）。
- 论文配图来自各篇论文本身；“Geometric features…” 预印本用的是它的图形摘要（原图在 `photo/figxx.png`）。
