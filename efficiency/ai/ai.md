---
outline: deep
editLink: false
---

### Cursor 中mcp的使用

---

#### 最终效果： 

![images_001](/efficiency/ai/images_001.png)

![images_002](/efficiency/ai/images_002.png)

![images_003](/efficiency/ai/images_003.png)

![images_004](/efficiency/ai/images_004.png)



# 🚀 使用 Cursor 的 MCP 调用 Chrome - 完整配置和测试教程

> 本文档提供完整的 MCP (Model Context Protocol) 配置和测试教程，帮助你在 Cursor IDE 中使用 Chrome 浏览器自动化工具。

## 📋 目录

1. [前置条件检查](#前置条件检查)
2. [安装 Chrome MCP 扩展](#安装-chrome-mcp-扩展)
3. [安装 mcp-chrome-bridge](#安装-mcp-chrome-bridge)
4. [配置 Cursor MCP](#配置-cursor-mcp)
5. [注册 Native Messaging Host](#注册-native-messaging-host)
6. [启动服务](#启动服务)
7. [测试验证](#测试验证)
8. [常见问题排查](#常见问题排查)
9. [完整测试案例](#完整测试案例)

---

## 前置条件检查

在开始配置之前，请确保满足以下条件：

### ✅ Node.js 版本检查

**⚠️ 重要提示：Node.js 版本必须 >= 18，否则虽然安装成功，但 server 无法启动！**

```bash
node --version
```

**要求**: Node.js >= 18.0.0

**示例输出**:
```
v22.16.0  ✅ 满足要求
```

如果版本低于 18，请先升级 Node.js：
- [Node.js 官网下载](https://nodejs.org/)
- 或使用 nvm 管理多个版本：`nvm install 18`

### ✅ Chrome 浏览器已安装

确保已安装 Google Chrome 浏览器。

### ✅ 包管理器选择

可以使用 `npm` 或 `pnpm` 安装，推荐使用 `pnpm`：

```bash
# 检查 pnpm 是否已安装
pnpm --version

# 如果未安装，全局安装 pnpm
npm install -g pnpm
```

---

## 安装 Chrome MCP 扩展

### 步骤 1: 下载 Chrome MCP 扩展

1. 访问 GitHub 发布页面：https://github.com/hangwin/mcp-chrome/releases
2. 下载最新版本的扩展文件（通常是 `.zip` 或 `.crx` 文件）
3. 解压文件到本地目录（如果是 `.zip` 文件）

### 步骤 2: 安装扩展到 Chrome

1. 打开 Chrome 浏览器
2. 在地址栏输入：`chrome://extensions/`
3. 开启右上角的**"开发者模式"**开关
4. 点击**"加载已解压的扩展程序"**按钮
5. 选择刚才解压的扩展文件夹
6. 确认扩展已成功安装

### 步骤 3: 验证扩展安装

安装成功后，你应该能在扩展列表中看到 **"Chrome MCP Server"** 或 **"MCP Chrome"** 扩展。

**扩展 ID**: `chrome-extension://hbdgbgagpkpjffpklnamcljpakneikee/`

---

## 安装 mcp-chrome-bridge

### 使用 pnpm 安装（推荐）

```bash
pnpm add -g mcp-chrome-bridge
```

### 或使用 npm 安装

```bash
npm install -g mcp-chrome-bridge
```

### 验证安装

```bash
# 检查是否安装成功
mcp-chrome-bridge --version

# 检查可执行文件路径
which mcp-chrome-bridge
```

**预期输出**:
```
1.0.29
/Users/your-username/Library/pnpm/mcp-chrome-bridge
```

---

## 配置 Cursor MCP

### ⚠️ 重要：配置格式错误导致失败

**常见错误配置**（❌ 不要使用这种方式）：

```json
{
  "mcpServers": {
    "chrome-browser": {
      "command": "npx",
      "args": ["-y", "chrome-mcp-server@0.0.6"]
    }
  }
}
```

**这种配置方式会导致连接失败！**

### ✅ 正确配置方式

在项目根目录或用户配置目录创建或编辑 `.cursor/mcp.json` 文件：

**项目级配置**（推荐）: `.cursor/mcp.json`

**全局配置**: `~/.cursor/mcp.json`

```json
{
  "mcpServers": {
    "chrome-browser": {
      "type": "streamable-http",
      "url": "http://localhost:12306/mcp"
    }
  }
}
```

**⚠️ 关键点**：
- 必须使用 `"type": "streamable-http"` 类型
- `url` 中的端口 `12306` 必须与 Chrome 扩展中设置的端口一致
- 不要使用 `command` + `args` 的方式

### 配置说明

| 配置项 | 说明 | 示例值 |
|--------|------|--------|
| `type` | 服务类型，必须为 `streamable-http` | `"streamable-http"` |
| `url` | MCP 服务地址 | `"http://localhost:12306/mcp"` |
| 端口 | 与 Chrome 扩展中的端口设置一致 | `12306` |

---

## 注册 Native Messaging Host

### 🤔 为什么需要这一步？

**Native Messaging 是 Chrome 的安全机制**，用于允许扩展与本地应用程序进行安全的双向通信。

#### 1. 安全隔离机制

Chrome 扩展运行在沙箱环境中，出于安全考虑，**不能直接访问本地文件系统或执行本地程序**。但是，MCP Chrome Bridge 需要：
- 启动本地的 Node.js 服务（`mcp-chrome-bridge`）
- 与本地服务进行双向通信（发送命令、接收响应）
- 控制 Chrome 浏览器（打开页面、点击元素等）

**Native Messaging 就是 Chrome 提供的安全桥梁**，让扩展可以安全地与本地应用程序通信。

#### 2. 工作原理

```
Chrome 扩展 (浏览器内)
    ↓
Native Messaging API (Chrome 内置)
    ↓
Native Messaging Host (必须注册)
    ↓
本地程序 (mcp-chrome-bridge)
    ↓
HTTP 服务 (localhost:12306)
    ↓
Cursor MCP (通过 HTTP 连接)
```

**没有注册 Native Messaging Host 会怎样？**
- Chrome 扩展无法找到本地服务程序
- 扩展调用 `chrome.runtime.connectNative()` 会失败
- 显示"服务未连接"错误
- 无法建立 Chrome ↔ 本地服务的通信通道

#### 3. 注册的作用

注册 Native Messaging Host 实际上是告诉 Chrome：
- **本地程序的路径**：在哪里找到 `mcp-chrome-bridge` 程序
- **允许的扩展 ID**：哪些扩展可以连接这个本地服务（白名单机制）
- **通信方式**：使用 `stdio`（标准输入输出）进行通信

**配置文件示例**：
```json
{
  "name": "com.chromemcp.nativehost",
  "description": "Node.js Host for Browser Bridge Extension",
  "path": "/Users/krui/Library/pnpm/global/5/node_modules/mcp-chrome-bridge/dist/run_host.sh",
  "type": "stdio",
  "allowed_origins": [
    "chrome-extension://hbdgbgagpkpjffpklnamcljpakneikee/"
  ]
}
```

**配置文件的作用**：
- `name`: 唯一标识符，Chrome 用它来查找这个 host
- `path`: 本地程序的完整路径，Chrome 会启动这个程序
- `allowed_origins`: 白名单，只有这个扩展 ID 可以连接
- `type: "stdio"`: 使用标准输入输出进行通信

#### 4. 为什么不能跳过这一步？

**如果跳过注册步骤**：
1. Chrome 扩展尝试连接本地服务时，Chrome 会查找 Native Messaging Host
2. Chrome 在系统配置目录中找不到对应的配置文件
3. `chrome.runtime.connectNative()` 调用失败，返回错误
4. 扩展显示"服务未连接"
5. 整个通信链路中断

**只有注册后**：
1. Chrome 知道要启动哪个本地程序
2. Chrome 知道允许哪个扩展连接
3. Chrome 启动本地程序（`run_host.sh`）
4. 建立双向通信通道
5. 扩展可以发送命令，本地程序可以响应

### ⚠️ 常见问题：服务未连接

**问题现象**：
- Chrome 扩展界面显示"服务未连接"（红色状态）
- 状态指示器显示"服务未连接"

**根本原因**：
- Native Messaging host 未注册到 Chrome
- Chrome 无法找到本地服务程序
- Chrome 无法建立扩展与本地服务的通信通道

### 解决步骤：注册 Native Messaging Host

运行以下命令注册 Native Messaging host：

```bash
mcp-chrome-bridge register
```

### 注册过程说明

注册命令会执行以下操作：

1. **设置 Node.js 路径**
   - 自动检测 Node.js 安装路径
   - 写入到 `run_host.sh` 脚本中

2. **设置执行权限**
   - 为 `index.js`、`run_host.sh`、`cli.js` 设置执行权限

3. **创建 Native Messaging 配置文件**
   - 配置文件位置（macOS）:
     ```
     ~/Library/Application Support/Google/Chrome/NativeMessagingHosts/com.chromemcp.nativehost.json
     ```
   - 配置文件位置（Linux）:
     ```
     ~/.config/google-chrome/NativeMessagingHosts/com.chromemcp.nativehost.json
     ```
   - 配置文件位置（Windows）:
     ```
     %LOCALAPPDATA%\Google\Chrome\User Data\NativeMessagingHosts\com.chromemcp.nativehost.json
     ```

4. **配置扩展 ID**
   - 自动配置允许的扩展 ID: `chrome-extension://hbdgbgagpkpjffpklnamcljpakneikee/`

### 验证注册结果

检查 Native Messaging 配置文件：

**macOS/Linux**:
```bash
cat ~/Library/Application\ Support/Google/Chrome/NativeMessagingHosts/com.chromemcp.nativehost.json
```

**Windows**:
```cmd
type %LOCALAPPDATA%\Google\Chrome\User Data\NativeMessagingHosts\com.chromemcp.nativehost.json
```

**预期输出**:
```json
{
  "name": "com.chromemcp.nativehost",
  "description": "Node.js Host for Browser Bridge Extension",
  "path": "/Users/your-username/Library/pnpm/global/5/node_modules/mcp-chrome-bridge/dist/run_host.sh",
  "type": "stdio",
  "allowed_origins": [
    "chrome-extension://hbdgbgagpkpjffpklnamcljpakneikee/"
  ]
}
```

---

## 启动服务

### 步骤 1: 在 Chrome 扩展中启动服务

1. **打开 Chrome 浏览器**
   - 确保 Chrome 浏览器已打开

2. **找到 Chrome MCP Server 扩展**
   - 方式 1: 点击地址栏右侧的扩展图标（拼图图标），找到扩展
   - 方式 2: 在地址栏输入 `chrome://extensions/` 打开扩展管理页面

3. **打开扩展设置界面**
   - 点击扩展图标
   - 或点击扩展详情页面的"选项"/"设置"按钮

4. **配置端口**
   - 在扩展设置界面中，确认端口设置为 **12306**
   - 端口必须与 Cursor MCP 配置中的端口一致

5. **启动服务**
   - 点击"连接"或"启动"按钮（通常是一个带有闪电图标的紫色按钮）
   - 等待状态变为"服务已连接"或"服务已启动"
   - 状态指示器应该变为绿色（🟢）

### ⚠️ 常见问题：点击连接后仍然显示"服务未连接"

**可能原因**：
1. Native Messaging host 未正确注册
2. Node.js 路径不正确
3. Chrome 扩展 ID 不匹配
4. Node.js 版本低于 18

**解决方案**：
1. 重新运行注册命令：
   ```bash
   mcp-chrome-bridge register
   ```
2. 检查 Node.js 版本：
   ```bash
   node --version
   ```
3. 重启 Chrome 浏览器
4. 重新点击扩展中的"连接"按钮

### 步骤 2: 验证服务状态

#### 方法 1: 检查端口占用

```bash
lsof -i :12306
```

**预期输出**（如果服务已启动）:
```
COMMAND   PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    65033 krui   17u  IPv4 0x944777a9d342e528      0t0  TCP localhost:12306 (LISTEN)
```

**如果端口未被占用**，说明服务未启动，需要回到步骤 1。

#### 方法 2: 测试服务连接

```bash
curl http://localhost:12306/mcp
```

**预期输出**（如果服务已启动）:
```
{"error":"Invalid or missing MCP session ID for SSE."}
```

这个错误是正常的，说明服务正在运行，只是缺少会话 ID。

### 步骤 3: 重启 Cursor

1. **完全退出 Cursor**
   - macOS: 按 `Cmd + Q` 完全退出应用
   - Windows: 按 `Alt + F4` 或右键任务栏图标选择退出
   - Linux: 关闭所有 Cursor 窗口

2. **重新打开 Cursor**
   - 打开 Cursor IDE
   - 等待 MCP 服务连接
   ![images_005](/efficiency/ai/images_005.png)

3. **验证 MCP 连接**
   - 在 Cursor 设置中查看 MCP 服务状态
   
   - 应该显示"已连接，服务已启动"
   
   - `chrome-browser` 服务应该显示为绿色（🟢）
     ![images_006](/efficiency/ai/images_006.png)
     

---

## 测试验证

### 使用配置检查脚本

项目提供了配置检查脚本，可以自动检查所有配置项：

```bash
node scripts/test-chrome-mcp-config.js
```

**脚本检查项**：
- ✅ Node.js 版本（>= 18）
- ✅ mcp-chrome-bridge 安装
- ✅ Native Messaging 注册
- ⚠️ 端口服务状态（需要在 Chrome 扩展中启动）
- ✅ Cursor MCP 配置

**预期输出**:
```
🔍 开始检查 Chrome MCP 配置...

✅ Node.js 版本: v22.16.0 (>= 18)
✅ mcp-chrome-bridge 已安装: 1.0.29 (/Users/krui/Library/pnpm/mcp-chrome-bridge)
✅ Native Messaging 已注册: /Users/krui/Library/Application Support/Google/Chrome/NativeMessagingHosts/com.chromemcp.nativehost.json
   扩展 ID: chrome-extension://hbdgbgagpkpjffpklnamcljpakneikee/
⚠️  端口 12306 未被占用（需要在 Chrome 扩展中启动服务）
✅ Cursor MCP 配置正确
   类型: streamable-http
   URL: http://localhost:12306/mcp

📊 检查结果总结:
──────────────────────────────────────────────────
✅ Node.js 版本
✅ mcp-chrome-bridge 安装
✅ Native Messaging 注册
❌ 端口服务状态
✅ Cursor MCP 配置
──────────────────────────────────────────────────
通过: 4/5

⚠️  部分检查未通过，请根据上述提示修复问题。
```

### 手动验证步骤

1. **检查 Chrome 扩展状态**
   - 打开 `chrome://extensions/`
   - 确认扩展已启用
   - 点击扩展图标，查看状态是否为"服务已连接"

2. **检查 Cursor MCP 状态**
   - 打开 Cursor 设置
   - 查看 MCP 服务列表
   - 确认 `chrome-browser` 服务已连接

3. **测试基本功能**
   - 在 Cursor 的 Agent 模式下输入简单测试指令
   - 查看是否能正常执行

---

## 常见问题排查

### ❌ 问题 1: 浏览器插件显示"服务未连接"

**问题现象**：
- Chrome 扩展界面显示红色状态："服务未连接"
- 状态指示器显示"服务未连接"

**可能原因**：
1. Native Messaging host 未注册
2. Node.js 版本低于 18
3. Node.js 路径不正确
4. Chrome 扩展 ID 不匹配

**解决方案**：

**步骤 1**: 检查 Node.js 版本
```bash
node --version
```
确保版本 >= 18

**步骤 2**: 重新注册 Native Messaging host
```bash
mcp-chrome-bridge register
```

**步骤 3**: 验证注册结果
```bash
cat ~/Library/Application\ Support/Google/Chrome/NativeMessagingHosts/com.chromemcp.nativehost.json
```

**步骤 4**: 检查扩展 ID 是否匹配
- 扩展 ID 应该是: `chrome-extension://hbdgbgagpkpjffpklnamcljpakneikee/`
- 如果配置文件中的 ID 不匹配，需要重新注册

**步骤 5**: 重启 Chrome 浏览器
- 完全关闭 Chrome 浏览器
- 重新打开 Chrome
- 再次点击扩展中的"连接"按钮

---

### ❌ 问题 2: Cursor MCP 配置格式错误

**问题现象**：
- Cursor 中显示 MCP 服务连接失败
- 无法使用 Chrome MCP 工具

**错误配置示例**（❌ 不要使用）：
```json
{
  "mcpServers": {
    "chrome-browser": {
      "command": "npx",
      "args": ["-y", "chrome-mcp-server@0.0.6"]
    }
  }
}
```

**正确配置方式**（✅ 必须使用）：
```json
{
  "mcpServers": {
    "chrome-browser": {
      "type": "streamable-http",
      "url": "http://localhost:12306/mcp"
    }
  }
}
```

**关键区别**：
- ❌ 错误方式：使用 `command` + `args` 直接运行 npm 包
- ✅ 正确方式：使用 `type: "streamable-http"` 连接本地 HTTP 服务

**修复步骤**：
1. 打开 `.cursor/mcp.json` 文件
2. 将配置改为正确的 `streamable-http` 格式
3. 确保端口 `12306` 与 Chrome 扩展中的端口一致
4. 保存文件
5. 重启 Cursor

---

### ❌ 问题 3: Cursor 显示"已连接，服务未启动"

**问题现象**：
- Cursor 中显示 MCP 服务已连接
- 但状态显示"服务未启动"
- 无法执行浏览器操作

**可能原因**：
- Chrome 扩展中的服务未启动
- 端口 12306 未被占用

**解决方案**：

**步骤 1**: 检查端口状态
```bash
lsof -i :12306
```

**步骤 2**: 在 Chrome 扩展中启动服务
1. 打开 Chrome 扩展设置界面
2. 点击"连接"或"启动"按钮
3. 等待状态变为"服务已连接"（绿色）

**步骤 3**: 验证服务状态
```bash
curl http://localhost:12306/mcp
```

如果返回错误信息（这是正常的），说明服务已启动。

**步骤 4**: 刷新 Cursor MCP 状态
- 在 Cursor 设置中刷新 MCP 服务状态
- 或重启 Cursor

---

### ❌ 问题 4: 端口 12306 被占用

**问题现象**：
- 无法启动服务
- 提示端口被占用

**检查端口占用**：
```bash
lsof -i :12306
```

**解决方案**：

**方案 1**: 关闭占用端口的进程
```bash
# 查找占用端口的进程
lsof -i :12306

# 终止进程（替换 PID 为实际进程 ID）
kill -9 <PID>
```

**方案 2**: 更改端口（推荐）
1. 在 Chrome 扩展中更改端口（如 12307）
2. 同时更新 Cursor 配置中的端口：
   ```json
   {
     "mcpServers": {
       "chrome-browser": {
         "type": "streamable-http",
         "url": "http://localhost:12307/mcp"
       }
     }
   }
   ```
3. 重启 Cursor

---

### ❌ 问题 5: Node.js 版本问题

**问题现象**：
- 安装成功但服务无法启动
- 提示 Node.js 版本错误

**检查版本**：
```bash
node --version
```

**要求**: Node.js >= 18.0.0

**解决方案**：
1. 如果版本低于 18，需要升级 Node.js
2. 使用 nvm 管理多个版本（推荐）：
   ```bash
   nvm install 18
   nvm use 18
   ```
3. 重新注册 Native Messaging host：
   ```bash
   mcp-chrome-bridge register
   ```
4. 重启 Chrome 浏览器

---

### ❌ 问题 6: 无法执行浏览器操作

**问题现象**：
- 服务已连接
- 但无法打开网页或执行操作

**可能原因**：
1. Chrome 浏览器未正确安装
2. Chrome 路径配置错误
3. 权限问题

**解决方案**：
1. 确认 Chrome 浏览器已正确安装
2. 尝试手动启动 Chrome 浏览器验证
3. 检查系统权限设置（macOS 可能需要授予辅助功能权限）

---

## 完整测试案例

### 测试案例 1: 基础搜索功能

在 Cursor 的 Agent 模式下输入以下指令：

```
使用 MCP 浏览器工具：
1. 打开 Chrome 访问 https://www.baidu.com
2. 在搜索框输入"淘宝"并提交搜索
3. 点击搜索结果中的第一个网站
```

**预期行为**：
1. Chrome 浏览器自动打开并导航到百度首页
2. 自动在搜索框输入"淘宝"
3. 自动提交搜索
4. 自动点击第一个搜索结果
5. 跳转到淘宝网站

---

### 测试案例 2: 网站内搜索

在 Cursor 的 Agent 模式下输入以下指令：

```
使用 MCP 浏览器工具：
1. 打开 Chrome 访问 https://www.baidu.com
2. 在搜索框输入"淘宝"并提交搜索
3. 点击搜索结果中的第一个网站
4. 在网站搜索栏输入"外国山海经"并提交搜索
```

**预期行为**：
1. 完成测试案例 1 的所有步骤
2. 在淘宝网站搜索框中输入"外国山海经"
3. 提交搜索
4. 显示搜索结果

---

### 测试案例 3: 获取页面信息

在 Cursor 的 Agent 模式下输入以下指令：

```
使用 Chrome MCP 工具打开 https://dayney.github.io/ 并找出文章的作者
```

**预期行为**：
1. Chrome 浏览器自动打开并导航到指定网站
2. 获取页面内容
3. 识别并返回文章作者信息

---

## 📊 配置检查清单

在配置完成后，请检查以下项目：

- [ ] Node.js 版本 >= 18
- [ ] Chrome 浏览器已安装
- [ ] Chrome MCP 扩展已安装
- [ ] mcp-chrome-bridge 已全局安装
- [ ] Native Messaging host 已注册
- [ ] Cursor MCP 配置正确（使用 `streamable-http` 类型）
- [ ] 端口 12306 已正确配置（扩展和 Cursor 一致）
- [ ] Chrome 扩展服务已启动（绿色状态）
- [ ] Cursor MCP 服务已连接
- [ ] 测试案例执行成功

---

## 🎯 快速参考

### 安装命令

```bash
# 安装 mcp-chrome-bridge
pnpm add -g mcp-chrome-bridge

# 注册 Native Messaging host
mcp-chrome-bridge register
```

### 配置文件位置

**Cursor MCP 配置**:
- 项目级: `.cursor/mcp.json`
- 全局: `~/.cursor/mcp.json`

**Native Messaging 配置**:
- macOS: `~/Library/Application Support/Google/Chrome/NativeMessagingHosts/com.chromemcp.nativehost.json`
- Linux: `~/.config/google-chrome/NativeMessagingHosts/com.chromemcp.nativehost.json`
- Windows: `%LOCALAPPDATA%\Google\Chrome\User Data\NativeMessagingHosts\com.chromemcp.nativehost.json`

### 验证命令

```bash
# 检查 Node.js 版本
node --version

# 检查 mcp-chrome-bridge 安装
mcp-chrome-bridge --version

# 检查端口占用
lsof -i :12306

# 测试服务连接
curl http://localhost:12306/mcp

# 运行配置检查脚本
node scripts/test-chrome-mcp-config.js
```

---

## 📚 相关资源

- [博客园教程](https://www.cnblogs.com/charkey/p/19027812) - 参考教程
- [GitHub 仓库](https://github.com/hangwin/mcp-chrome/releases) - Chrome MCP 扩展下载
- [MCP Chrome Bridge npm 包](https://www.npmjs.com/package/mcp-chrome-bridge) - npm 包信息
- [Cursor MCP 文档](https://docs.cursor.com/mcp) - Cursor 官方文档

---

## 💡 经验总结

### ✅ 成功配置的关键点

1. **Node.js 版本必须 >= 18**：这是最重要的前提条件
2. **使用正确的配置格式**：必须使用 `streamable-http` 类型，不要使用 `command` + `args`
3. **注册 Native Messaging host**：这是连接 Chrome 扩展和本地服务的关键步骤
4. **端口配置一致**：Chrome 扩展和 Cursor 配置中的端口必须完全一致
5. **按顺序执行**：先注册 Native Messaging，再启动扩展服务，最后重启 Cursor

### ❌ 常见失败原因

1. **Node.js 版本过低**：虽然安装成功，但服务无法启动
2. **配置格式错误**：使用了错误的配置方式（`command` + `args`）
3. **未注册 Native Messaging host**：导致 Chrome 扩展无法连接本地服务
4. **端口不一致**：扩展和 Cursor 配置中的端口不匹配
5. **服务未启动**：虽然配置正确，但忘记在 Chrome 扩展中启动服务

---

## 🔄 更新日志

- **2025-01-27**: 创建完整配置和测试教程
  - 添加前置条件检查
  - 详细说明安装步骤
  - 重点标记常见问题
  - 添加完整测试案例
  - 提供配置检查清单


**参考文档**: https://www.cnblogs.com/charkey/p/19027812



