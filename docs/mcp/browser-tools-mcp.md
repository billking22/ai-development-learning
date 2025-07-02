# Browser Tools MCP Server

## 📋 概述

Browser Tools MCP (Model Context Protocol) 是一个强大的浏览器自动化工具，允许 AI 模型直接与浏览器交互进行网页操作、测试、审计和调试。通过这个 MCP 服务器，您可以实现网页截图、性能分析、可访问性检测、SEO 审计等功能。

## 🔗 项目链接

**GitHub 仓库**: [browser-tools-mcp](https://github.com/AgentDeskAI/browser-tools-mcp)

## ✨ 主要功能

- 📸 **页面截图** - 获取当前浏览器页面的完整截图
- 🔍 **元素选择** - 获取和操作页面中的特定元素
- 📊 **性能审计** - 运行 Lighthouse 性能测试
- ♿ **可访问性检测** - 进行网页可访问性分析
- 🔎 **SEO 审计** - 检查页面的 SEO 优化情况
- 🏆 **最佳实践** - 检查网页开发最佳实践
- 🐛 **调试模式** - 开启调试模式排查问题
- 📋 **日志管理** - 查看控制台日志和网络错误
- ⚛️ **Next.js 审计** - 专门的 Next.js 应用优化检测

## ⚙️ 配置步骤

### 1. 安装浏览器插件 (BrowserTools MCP)

### 2. MCP 服务器配置

在您的 MCP 配置文件中添加以下配置：

```json
{
  "mcpServers": {
    "browser-tools-mcp": {
      "command": "npx",
      "args": ["-y", "@agentdeskai/browser-tools-mcp"]
    }
  }
}
```

### 3. 需要运行额外服务

```
npx @agentdeskai/browser-tools-server
```

## 📋 使用场景

### 1. 网页开发调试

```bash
# AI助手使用示例
"请帮我检查这个页面的性能问题，并截图看看当前状态"
"运行可访问性审计，看看有哪些需要改进的地方"
"获取控制台错误日志，分析出现的问题"
```

### 2. 自动化测试

```bash
# 批量审计流程
"请对这个网站进行完整的审计，包括性能、SEO、可访问性和最佳实践"
"运行调试模式，然后截图记录当前页面状态"
```

### 3. 持续集成检查

```bash
# CI/CD 集成
"在部署前运行完整的质量检查流程"
"检查 Next.js 应用的优化情况"
```

## 🔧 高级配置

### 审计配置

```json
{
  "lighthouse": {
    "settings": {
      "onlyCategories": [
        "performance",
        "accessibility",
        "seo",
        "best-practices"
      ],
      "throttling": {
        "cpuSlowdownMultiplier": 1,
        "requestLatencyMs": 0,
        "downloadThroughputKbps": 0,
        "uploadThroughputKbps": 0
      }
    }
  }
}
```

### 浏览器配置

```json
{
  "browser": {
    "headless": true,
    "viewport": {
      "width": 1920,
      "height": 1080
    },
    "userAgent": "Mozilla/5.0 (compatible; AI-Browser-Tools)",
    "args": [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage"
    ]
  }
}
```

## 📊 审计报告示例

### 性能审计结果

```json
{
  "performance": {
    "score": 95,
    "metrics": {
      "first-contentful-paint": "1.2s",
      "largest-contentful-paint": "2.1s",
      "cumulative-layout-shift": 0.05,
      "total-blocking-time": "150ms"
    }
  }
}
```

### 可访问性审计结果

```json
{
  "accessibility": {
    "score": 88,
    "violations": [
      {
        "id": "color-contrast",
        "impact": "serious",
        "description": "元素的背景和前景颜色对比度不足"
      }
    ]
  }
}
```

## 🐛 故障排除

### 常见问题

1. **浏览器启动失败**
   - 检查 Chrome/Chromium 是否正确安装
   - 确认 `BROWSER_EXECUTABLE_PATH` 路径正确

2. **权限问题**
   - 在 Linux 系统上可能需要 `--no-sandbox` 参数
   - 检查文件系统权限

3. **截图失败**
   - 确认页面已完全加载
   - 检查元素是否在视口内

4. **审计超时**
   - 增加超时时间配置
   - 检查网络连接和页面响应速度

### 调试技巧

```bash
# 开启详细日志
export DEBUG=browser-tools-mcp:*

# 运行单个功能测试
npx browser-tools-mcp test screenshot

# 验证配置
npx browser-tools-mcp verify-config
```

## 🚀 最佳实践

### 1. 开发流程集成

```yaml
# .github/workflows/audit.yml
name: Web Audit
on: [push, pull_request]
jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Browser Audit
        run: |
          pnpm install
          pnpm build
          npx browser-tools-mcp audit
```

### 2. 本地开发使用

```bash
# 开发时实时审计
"请在我修改代码后自动运行性能和可访问性检查"

# 提交前检查
"运行完整的审计流程，确保代码质量"
```

## 📚 相关资源

- [Lighthouse 官方文档](https://developers.google.com/web/tools/lighthouse)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Puppeteer 文档](https://pptr.dev/)
- [MCP 协议规范](https://modelcontextprotocol.io/docs)

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个工具！

1. Fork 项目仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 🔄 更新日志

### v1.2.0

- 新增 Next.js 专用审计功能
- 改进错误处理机制
- 优化截图质量

### v1.1.0

- 新增调试模式
- 增强网络日志功能
- 修复已知问题

---

> 💡 **提示**: 这个工具特别适合与 AI 助手配合使用，能够大大提升前端开发的效率和质量。建议在开发流程中定期使用审计功能。
