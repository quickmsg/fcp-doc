# 应用管理

应用（Application）是 FCP 中管理 FluxMQ 集群的基本单元，对应一个或多个 FluxMQ 节点。

## 概念

- **应用**：代表一套 FluxMQ 业务集群，用于 License 分配、代理与监控。
- **应用类型**：如 FluxMQ；后续可扩展其他类型。
- **License 激活方式**：本地文件（LOCAL）或通过 FCP 激活（FCP 模式）。

## 创建应用

1. 登录 FCP 控制台。
2. 进入 **应用管理**（或「应用」菜单）。
3. 点击 **新建应用**，填写：
   - 应用名称
   - 所属项目
   - 应用类型（如 FluxMQ）
   - License 激活方式（FCP 时需在本应用下分配 License）
   - 可选：监控采集间隔、数据保留天数等。

## 代理与连接

- **代理模式**：当 FluxMQ 使用 FCP 模式时，需在 FCP 中为该应用配置 **Proxy Token**、**代理端口** 等。
- FluxMQ 端在 `config.yaml` 中配置 `proxy.serverUrl`、`proxy.token`、`proxy.applicationId`，指向本 FCP 及对应应用。

## 监控

- 可为应用配置监控采集间隔；FCP 从 FluxMQ 节点拉取指标并展示。
- 在 **监控** 或 **应用详情** 中查看连接数、消息量等。
