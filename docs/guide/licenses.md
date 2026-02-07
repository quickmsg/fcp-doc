# License 管理

FCP 负责 FluxMQ 在 **FCP 模式** 下的 License 签发、分配与激活。

## 两种 License 模式（FluxMQ 侧）

| 模式 | 说明 |
|------|------|
| **LOCAL** | FluxMQ 使用本地 license 文件，不依赖 FCP。 |
| **FCP** | FluxMQ 通过 FCP 进行 License 校验与拉取，需在 FCP 中创建应用并分配 License。 |

## 在 FCP 中管理 License

1. **签发/导入 License**  
   系统管理员在 FCP 中上传或签发 License（具体以产品实现为准）。

2. **分配到应用**  
   将 License 分配到指定应用（Application），并设置连接数等限制。

3. **FluxMQ 激活**  
   - FluxMQ 配置 `license.mode: FCP` 和 `proxy.*`（serverUrl、token、applicationId）。
   - 启动后向 FCP 发起激活请求，FCP 校验通过后下发 License 信息。

## 连接数限制

- 每个 License 可设置最大连接数等限制。
- FCP 按应用维度统计连接并校验是否超限，超限时可按策略拒绝或告警。
