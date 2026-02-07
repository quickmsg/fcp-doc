# 代理服务

FCP 提供**代理服务**，供 FluxMQ 在 FCP 模式下与 FCP 通信，也可为浏览器等客户端提供访问 FluxMQ 管理接口的通道。

## 作用

- **FluxMQ → FCP**：FluxMQ 节点通过代理地址（如 `tcp://fcp-host:8081`）连接 FCP，进行 License 校验、心跳等。
- **浏览器 → FCP → FluxMQ**：用户通过 FCP 代理访问 FluxMQ 的 HTTP 管理界面，无需直连 FluxMQ 地址。

## 配置（FCP 端）

在 **config.toml** 中：

```toml
[proxy]
host = "0.0.0.0"
port = 8081
```

- **port_range**：若实现为每个应用分配端口范围，则在此配置（以实际代码为准）。

## 配置（FluxMQ 端）

当 `license.mode: FCP` 时，在 FluxMQ 的 **config.yaml** 中配置：

```yaml
license:
  mode: FCP

proxy:
  serverUrl: tcp://fcp-host:8081
  token: "<应用对应的 Proxy Token>"
  applicationId: "<应用 ID>"
```

应用 ID 与 Token 在 FCP 的**应用管理**中创建应用后获取。

## 安全建议

- 生产环境对代理端口做防火墙或安全组限制。
- Token 定期轮换，避免泄露。
