# 安装与配置

安装完成后，主要通过 **config.toml** 进行配置。

## 配置文件位置

- **Linux 安装**：`/opt/fcp-admin/config.toml`
- **Docker/其他**：由启动参数或环境变量指定

## 配置项说明

完整说明见 [配置说明](../config/read)。

常用片段示例：

```toml
[server]
address = "0.0.0.0:8080"

[database]
type = "sqlite"
url = "/opt/fcp-admin/data/data.db"

[jwt]
secret = "your-jwt-secret-key"
expiration = 86400

[proxy]
host = "0.0.0.0"
port = 8081
```

修改后需重启 FCP 服务生效。
