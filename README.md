# FCP 产品文档

FCP（FluxMQ Control Plane）产品文档站点，基于 Docusaurus 构建。

## 本地开发

```bash
npm install
npm run start
```

访问 http://localhost:3000

## 构建

```bash
npm run build
npm run serve  # 预览构建结果
```

## GitHub Actions 与 Pages 部署

推送代码到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

**首次使用需在仓库设置中开启 Pages：**

1. 打开 [quickmsg/fcp-doc](https://github.com/quickmsg/fcp-doc) → **Settings** → **Pages**
2. **Source** 选择 **GitHub Actions**
3. 保存后，每次推送到 `main` 会触发 `.github/workflows/deploy.yml`，构建 Docusaurus 并部署

部署完成后访问：`https://quickmsg.github.io/fcp-doc/`（若未配置自定义域名）。

## 文档结构

- **产品介绍**：FCP 定位、功能、与 FluxMQ 关系
- **安装部署**：Linux 安装包、Docker、配置说明
- **配置说明**：config.toml 配置项
- **功能指南**：应用、License、项目、组织、用户、代理、监控、告警、审计
- **API 概览**：REST API 与认证说明
- **FAQ**：常见问题

## 作为 Git 子模块使用

在 FluxMQ 主仓库中添加 FCP 文档子模块（需先在 GitHub 创建仓库 `quickmsg/fcp-doc`）：

```bash
# 1. 在 fcp-doc 目录初始化并推送到远程（首次）
cd fcp-doc
git init
git add .
git commit -m "docs: initial FCP documentation"
git branch -M main
git remote add origin git@github.com:quickmsg/fcp-doc.git
git push -u origin main

# 2. 在 fluxmq 根目录添加子模块（若 fcp-doc 目录已存在且含未提交内容，可先备份后删除再执行）
cd /path/to/fluxmq
git submodule add git@github.com:quickmsg/fcp-doc.git fcp-doc
```

克隆主仓库时拉取子模块：

```bash
git clone --recurse-submodules git@github.com:quickmsg/fluxmq.git
# 或已克隆后
git submodule update --init --recursive
```
