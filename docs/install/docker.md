# Docker 部署

## 构建镜像

若需从源码构建（需先配置数据库与构建环境）：

```bash
cd fmq-admin
# 构建后端并打包前端后，编写 Dockerfile 构建镜像
```

## 使用镜像运行（示例）

若已有 FCP 镜像，可参考以下方式运行：

```bash
# 挂载配置与数据目录
docker run -d \
  --name fcp \
  -p 8080:8080 \
  -v /opt/fcp-admin/config.toml:/app/config.toml \
  -v /opt/fcp-admin/data:/app/data \
  your-registry/fcp-admin:latest
```

具体镜像名与标签以实际仓库为准。数据库建议使用外部 PostgreSQL/MySQL，通过 `config.toml` 或环境变量配置连接。

## 环境变量

常用环境变量（部分实现可能从配置文件读取）：

- `DATABASE_TYPE`: postgres / mysql / sqlite
- `DATABASE_URL`: 数据库连接串
- `JWT_SECRET`: JWT 密钥
- `SERVER_ADDRESS`: 服务监听地址，如 `0.0.0.0:8080`

详细以项目 `config.toml` 与部署文档为准。
