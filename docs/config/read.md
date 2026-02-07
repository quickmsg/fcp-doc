# 配置说明

FCP 使用 **config.toml** 作为主配置文件（部分部署方式支持环境变量覆盖）。

## 配置示例

```toml
[server]
address = "0.0.0.0:8080"

[database]
type = "sqlite"
url = "/opt/fcp-admin/data/data.db"

[jwt]
secret = "your-jwt-secret-key"
expiration = 86400

[admin]
username = "admin"
password = "admin"
email = "admin@example.com"
auto_create = true

[logging]
level = "info"
file_dir = "logs"

[proxy]
host = "0.0.0.0"
port = 8081
```

## 配置项说明

| 节 | 配置项 | 说明 |
|----|--------|------|
| server | address | 服务监听地址，如 `0.0.0.0:8080` |
| database | type | 数据库类型：postgres / mysql / sqlite |
| database | url | 数据库连接 URL |
| jwt | secret | JWT 签名密钥，生产环境务必修改 |
| jwt | expiration | Token 有效期（秒） |
| admin | username / password / email | 初始管理员账号（auto_create 时创建） |
| admin | auto_create | 是否自动创建管理员 |
| logging | level | 日志级别：debug / info / warn / error |
| logging | file_dir | 日志目录 |
| proxy | host / port | 代理服务监听地址与端口，供 FluxMQ FCP 模式连接 |

## 数据库 URL 示例

```bash
# PostgreSQL
url = "postgres://user:password@localhost:5432/fcp_admin"

# MySQL
url = "mysql://user:password@localhost:3306/fcp_admin"

# SQLite
url = "sqlite:./data/fcp_admin.db"
```

修改配置后需重启 FCP 服务。
