# 安装概述

## 环境要求

- **Rust** 1.70+（从源码构建时）
- **Node.js** 16+（若需单独构建前端）
- **数据库**（任选其一）：
  - PostgreSQL 13+
  - MySQL 8.0+
  - SQLite 3.x（无需额外安装，适合试用）

## 安装方式

| 方式 | 说明 | 适用场景 |
|------|------|----------|
| [Linux 安装包](linux.md) | 使用官方安装脚本与 systemd 服务 | 生产/测试服务器 |
| [Docker](docker.md) | 使用镜像部署 | 容器化环境 |
| [配置说明](config.md) | config.toml 与环境变量 | 所有部署方式 |

## 部署后目录（Linux 安装）

```
/opt/fcp-admin/
├── bin/fcp-admin      # 可执行文件
├── static/            # 前端静态资源
├── data/               # 数据目录（如 SQLite）
├── uploads/            # 上传文件
├── migrations/         # 数据库迁移
└── config.toml         # 配置文件
```

## 下一步

1. 选择 [Linux](linux.md) 或 [Docker](docker.md) 完成安装。
2. 根据 [配置说明](config.md) 修改 `config.toml` 或环境变量。
3. 启动服务后访问 Web 界面，使用管理员账号登录。
