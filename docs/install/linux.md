# Linux 安装

## 全新安装

```bash
# 1. 进入项目/安装包目录
cd fmq-admin   # 或 fcp-admin 安装包解压目录

# 2. 运行安装脚本
sudo bash deploy/install.sh

# 3. 编辑配置
sudo nano /opt/fcp-admin/config.toml

# 4. 启动并设置开机自启
sudo systemctl start fcp
sudo systemctl enable fcp
```

## 升级现有版本

```bash
cd fmq-admin
git pull
sudo bash deploy/upgrade.sh
```

## 卸载

```bash
sudo bash deploy/uninstall.sh
```

## Systemd 服务管理

```bash
sudo systemctl start fcp    # 启动
sudo systemctl stop fcp     # 停止
sudo systemctl restart fcp  # 重启
sudo systemctl status fcp   # 状态
sudo systemctl enable fcp   # 开机自启
sudo journalctl -u fcp -f   # 查看日志
```

## 打包分发

```bash
bash deploy/package.sh
# 输出示例: dist/fcp-admin-0.1.0.tar.gz
```
