# Figma MCP Server

## 📋 概述

Figma MCP (Model Context Protocol) 是一个强大的工具，允许 AI 模型直接与 Figma 设计文件交互。通过这个 MCP 服务器，您可以获取 Figma 文件的结构、下载资源、分析设计等。

## 🔗 项目链接

**GitHub 仓库**: [GLips/Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP)

## ✨ 主要功能

- 📄 获取 Figma 文件的完整结构和数据
- 🖼️ 下载 SVG 和 PNG 格式的图像资源
- 🎨 分析设计组件和图层信息
- 📐 获取设计规范和尺寸信息
- 🔍 搜索和定位特定的设计元素

## ⚙️ 配置步骤

### 1. 获取 Figma API Key

1. 登录您的 Figma 账户
2. 前往 [Figma Settings](https://www.figma.com/settings)
3. 在 "Personal access tokens" 部分生成新的 token
4. 复制生成的 API 密钥

### 2. MCP 服务器配置

在您的 MCP 配置文件中添加以下配置：

```json
{
  "mcpServers": {
    "Framelink Figma MCP": {
      "command": "pnpx",
      "args": [
        "figma-developer-mcp",
        "--figma-api-key=your-figma-api-key-here",
        "--stdio"
      ]
    }
  }
}
```

> ⚠️ **注意**: 请将 `your-figma-api-key-here` 替换为您实际的 Figma API 密钥

## 🚀 常规使用方式

### 获取 Figma 文件数据

```typescript
// 获取整个Figma文件的结构
await getFigmaData({
  fileKey: "your-figma-file-key",
  nodeId: "optional-specific-node-id",
});
```

### 下载设计资源

```typescript
// 下载图像资源
await downloadFigmaImages({
  fileKey: "your-figma-file-key",
  nodes: [
    {
      nodeId: "1234:5678",
      fileName: "icon-home.svg",
    },
  ],
  localPath: "/path/to/assets",
});
```

## 📋 使用场景

### 1. 设计系统管理

- 自动提取设计 token（颜色、字体、间距等）
- 同步设计组件到代码库
- 生成设计文档

### 2. 资源批量处理

- 批量导出图标和图片
- 优化和处理设计资源
- 自动化资源管理流程

### 3. 设计审查和分析

- 分析设计规范的一致性
- 检查可访问性问题
- 生成设计报告

## 🔧 高级配置

### 环境变量配置

```bash
# .env文件
FIGMA_API_KEY=your-figma-api-key
FIGMA_TEAM_ID=your-team-id (可选)
```

### 批量操作配置

```json
{
  "figma": {
    "defaultExportSettings": {
      "format": "svg",
      "scale": 1,
      "includeId": false,
      "outlineText": true
    },
    "downloadPath": "./assets/figma"
  }
}
```

## 🐛 故障排除

### 常见问题

1. **API 密钥无效**

   - 确认 API 密钥正确且未过期
   - 检查网络连接

2. **文件访问权限**

   - 确保 API 密钥有权限访问目标文件
   - 检查文件是否为公开或已共享

3. **节点 ID 获取**
   - 在 Figma 中右键点击元素，选择"Copy link"
   - 从 URL 中提取 node-id 参数

## 📚 相关资源

- [Figma API 官方文档](https://www.figma.com/developers/api)
- [MCP 协议规范](https://modelcontextprotocol.io/docs)
- [示例项目和模板](https://github.com/GLips/Figma-Context-MCP/examples)

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个工具！

1. Fork 项目仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

---

> 💡 **提示**: 这个文档会持续更新，建议收藏并关注项目动态获取最新信息。
