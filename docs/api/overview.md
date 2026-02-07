# API 概览

FCP 提供 REST API，供前端与第三方系统集成。

## 认证

- 登录：`POST /api/v1/auth/login`，请求体含 `username`、`password`，返回 JWT。
- 获取当前用户：`GET /api/v1/auth/me`，Header 需带 `Authorization: Bearer <token>`。
- 其他接口均在 Header 中携带上述 Token。

## 主要模块

| 模块 | 路径前缀 | 说明 |
|------|----------|------|
| 认证 | /api/v1/auth | 登录、当前用户 |
| 组织 | /api/v1/organizations | 组织 CRUD |
| 项目 | /api/v1/projects | 项目 CRUD |
| 应用 | /api/v1/applications | 应用 CRUD（以实际路由为准） |
| License | /api/v1/licenses | License 管理（以实际路由为准） |
| 告警 | /api/v1/alerts | 告警列表与状态更新 |
| 告警规则 | /api/v1/alert-rules | 告警规则 CRUD |
| 通知渠道 | /api/v1/notification-channels | 通知渠道配置（以实际路由为准） |
| 审计 | /api/v1/audit-logs | 审计日志查询 |

## 说明

- 实际路径与请求/响应格式以 fmq-admin 代码与 OpenAPI 文档为准。
- 更多接口可参考 [fmq-admin README](https://github.com/quickmsg/fmq-admin) 中的 API 章节。
