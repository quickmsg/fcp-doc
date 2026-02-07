# 常见问题

## 安装与部署

**Q: 支持哪些数据库？**  
A: PostgreSQL 13+、MySQL 8.0+、SQLite 3.x。生产环境建议使用 PostgreSQL 或 MySQL。

**Q: 首次登录账号从哪里来？**  
A: 若配置中 `admin.auto_create = true`，首次启动时会根据 `admin` 节创建管理员账号。否则需通过迁移或脚本创建。

**Q: 代理端口 8081 无法访问？**  
A: 检查 config.toml 中 `[proxy]` 的 host/port，以及防火墙、安全组是否放行该端口。

## License 与 FluxMQ

**Q: FluxMQ 如何切换到 FCP 模式？**  
A: 在 FluxMQ 的 config.yaml 中设置 `license.mode: FCP`，并配置 `proxy.serverUrl`、`proxy.token`、`proxy.applicationId`，指向 FCP 及在 FCP 中创建的应用。

**Q: FCP 中应用与 FluxMQ 的对应关系？**  
A: 一个 FCP 应用可对应多台 FluxMQ 节点（同一业务集群）。每台节点配置相同的 applicationId 与对应 token。

**Q: Token 泄露怎么办？**  
A: 在 FCP 应用管理中重新生成或更换 Proxy Token，并更新所有 FluxMQ 节点的 config.yaml 后重启。

## 权限与多租户

**Q: 如何限制某用户只能看某个项目？**  
A: 将用户角色设为项目管理员或普通用户，并只分配至对应项目，即可实现按项目隔离。

**Q: 审计日志保留多久？**  
A: 以实际实现与配置为准，可在配置或数据库中设置保留策略。

## 监控与告警

**Q: 告警不触发？**  
A: 检查告警规则条件是否满足、规则是否启用，以及通知渠道是否配置正确且可用。

**Q: 支持哪些通知渠道？**  
A: 常见为钉钉、飞书、企业微信等，以 FCP 当前实现为准，在「通知渠道」中配置。
