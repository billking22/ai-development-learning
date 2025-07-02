# Context7 MCP Server

## 📋 概述

Context7 MCP (Model Context Protocol) 是一个为LLMs和AI代码编辑器提供**最新代码文档**的强大工具。它能够实时获取各种编程库和框架的最新文档，让AI助手能够基于最准确、最新的信息来协助开发工作。Context7解决了AI模型训练数据滞后的问题，确保您获得最新的技术文档和API参考。

## 🔗 项目链接

**GitHub 仓库**: [upstash/context7](https://github.com/upstash/context7)
**官方网站**: [context7.com](https://context7.com)

## ✨ 主要功能

- 📚 **实时文档获取** - 获取各种编程库和框架的最新官方文档
- 🔍 **智能库搜索** - 将通用库名称解析为Context7兼容的库ID
- 🎯 **主题聚焦** - 根据特定主题（如"路由"、"钩子"）筛选相关文档
- 🚀 **海量库支持** - 支持MongoDB、Next.js、React、Vue等数百个流行库
- ⚡ **快速响应** - 高性能文档检索，支持令牌数量控制
- 🔄 **实时更新** - 确保AI获得最新版本的API文档和使用指南
- 🤖 **AI优化** - 专为LLMs和AI代码编辑器优化的文档格式
- 🌐 **多平台支持** - 支持VS Code、Claude、Cursor等多个AI开发环境

## ⚙️ 配置步骤

### 1. 无需安装 - 直接使用NPX

Context7 MCP 可以直接通过 `npx` 使用，无需预先安装：

```bash
# 直接运行（推荐）
npx -y @upstash/context7-mcp

# 或使用 bunx
bunx -y @upstash/context7-mcp
```

### 2. 在AI工具中配置MCP服务器

#### Claude Desktop 配置

在 Claude Desktop 的 MCP 配置文件中添加：

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
```

#### VS Code (Cursor/Continue) 配置

在 VS Code 设置中添加：

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
```

OR

```
"context7": {
  "url": "https://mcp.context7.com/mcp"
}
```

#### Zencoder 配置

在 Zencoder 的 Agent tools 中添加：

```json
{
  "command": "npx",
  "args": ["-y", "@upstash/context7-mcp@latest"]
}
```

## 🚀 使用方式

### 基础文档查询

配置完成后，您可以直接向AI助手提出关于任何编程库的问题：

```bash
# 获取React最新文档
"帮我查看React 18的最新useEffect用法"
"获取Next.js App Router的最新路由配置方式"

# 获取特定主题的文档
"查看MongoDB聚合管道的详细文档"
"获取Vue 3组合式API的最新指南"
```

### 解决过时信息问题

Context7特别适合解决AI训练数据过时的问题：

```bash
# 获取最新版本信息
"查看Tailwind CSS的最新class名称和功能"
"获取React Query v5的最新API变更"
"检查Next.js 14的最新实验性功能"
```

### 深入特定主题

使用主题聚焦功能获取更精准的文档：

```bash
# 聚焦特定功能
"获取React关于hooks的详细文档"
"查看Next.js关于缓存策略的最新文档"
"获取MongoDB关于索引优化的详细指南"
```

## 🔧 可用工具详解

Context7 MCP 为LLMs提供以下工具：

### 1. resolve-library-id - 库名称解析

该工具将通用的库名称转换为Context7兼容的库ID：

**参数:**

- `libraryName` (必需): 要搜索的库名称

**使用示例:**

```bash
# AI助手会自动调用此工具
"我想了解React的文档"
# Context7会将"React"解析为"/facebook/react"

"查看Next.js的资料"
# Context7会将"Next.js"解析为"/vercel/next.js"
```

### 2. get-library-docs - 文档获取

该工具根据库ID获取详细的文档内容：

**参数:**

- `context7CompatibleLibraryID` (必需): 精确的Context7兼容库ID
- `topic` (可选): 聚焦特定主题
- `tokens` (可选): 最大令牌数量，默认10000

**使用示例:**

```bash
# 获取完整文档
get-library-docs("/mongodb/docs")

# 聚焦特定主题
get-library-docs("/vercel/next.js", topic: "routing")

# 控制返回内容长度
get-library-docs("/facebook/react", tokens: 5000)
```

### 3. 支持的热门库

Context7支持数百个流行的编程库和框架：

**前端框架:**

- React (`/facebook/react`)
- Vue.js (`/vuejs/vue`)
- Angular (`/angular/angular`)
- Svelte (`/sveltejs/svelte`)

**全栈框架:**

- Next.js (`/vercel/next.js`)
- Nuxt (`/nuxt/nuxt`)
- Remix (`/remix-run/remix`)
- SvelteKit (`/sveltejs/kit`)

**数据库:**

- MongoDB (`/mongodb/docs`)
- PostgreSQL (`/postgres/postgres`)
- Redis (`/redis/redis`)

**工具链:**

- Vite (`/vitejs/vite`)
- Webpack (`/webpack/webpack`)
- TypeScript (`/microsoft/typescript`)

## 📊 使用统计

### 社区反响

Context7在开发者社区获得了广泛认可：

- **⭐ GitHub Stars**: 16.7k+ 星标
- **🍴 Forks**: 815+ 个分叉
- **👥 贡献者**: 45+ 位贡献者
- **📺 媒体报道**: 多个技术博主推荐

### 支持的AI工具

Context7已集成到多个主流AI开发工具中：

- **Claude Desktop** - 官方支持
- **VS Code (Cursor/Continue)** - 完整集成
- **Zencoder** - 原生支持
- **Amazon Q Developer CLI** - 兼容配置
- **JetBrains AI Assistant** - 实验性支持

## 🛠️ 高级配置

### 远程服务器连接

Context7提供远程服务器选项，无需本地安装：

```json
{
  "mcpServers": {
    "context7": {
      "type": "streamable-http",
      "url": "https://mcp.context7.com/mcp"
    }
  }
}
```

### 本地开发配置

对于开发和调试，可以使用本地配置：

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["tsx", "/path/to/context7-mcp/src/index.ts"]
    }
  }
}
```

### 传输协议选项

Context7支持多种传输协议：

```bash
# 使用HTTP协议
npx @upstash/context7-mcp --transport http --port 8080

# 使用SSE协议
npx @upstash/context7-mcp --transport sse --port 3000

# 默认stdio协议
npx @upstash/context7-mcp
```

## 📋 使用场景

### 1. 学习新技术

当您需要了解新的编程库或框架时：

```bash
"我想学习Svelte，请获取最新的官方文档"
"帮我了解Prisma ORM的最新功能和用法"
"查看Tailwind CSS v4的新特性"
```

### 2. 解决开发问题

遇到具体技术问题时获取准确答案：

```bash
"Next.js 14的App Router中如何实现动态路由？"
"React Query v5的缓存策略有什么变化？"
"MongoDB聚合管道的性能优化方法"
```

### 3. API参考查询

快速获取最新的API文档：

```bash
"获取Express.js的中间件使用文档"
"查看Vue 3 Composition API的完整参考"
"TypeScript 5.0的新类型功能说明"
```

### 4. 技术选型决策

比较不同技术方案：

```bash
"对比Next.js和Nuxt.js的最新功能差异"
"React和Vue在2024年的生态系统对比"
"不同状态管理库的最新性能对比"
```

## 🔍 故障排除

### 常见问题解决

#### 1. 模块未找到错误

如果遇到 `ERR_MODULE_NOT_FOUND` 错误：

```json
{
  "mcpServers": {
    "context7": {
      "command": "bunx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
```

#### 2. ESM解析问题

对于 `Error: Cannot find module 'uriTemplate.js'` 错误：

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": [
        "-y",
        "--node-options=--experimental-vm-modules",
        "@upstash/context7-mcp@1.0.6"
      ]
    }
  }
}
```

#### 3. TLS/证书问题

使用 `--experimental-fetch` 标志解决TLS相关问题：

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": [
        "-y",
        "--node-options=--experimental-fetch",
        "@upstash/context7-mcp"
      ]
    }
  }
}
```

### 调试技巧

#### 使用MCP Inspector测试

```bash
npx -y @modelcontextprotocol/inspector npx @upstash/context7-mcp
```

#### 检查Node.js版本

确保使用Node.js v18或更高版本以获得原生fetch支持。

#### 备用方案

1. 尝试在包名中添加 `@latest`
2. 使用 `bunx` 作为 `npx` 的替代
3. 考虑使用 `deno` 作为另一选择

## 🚀 最佳实践

### 1. 高效查询技巧

#### 具体化您的问题

```bash
# ❌ 模糊查询
"React怎么用？"

# ✅ 具体查询
"React 18中useEffect的cleanup函数最佳实践"
"Next.js App Router的动态路由参数获取方法"
```

#### 指定版本和主题

```bash
# 指定版本
"获取Vue 3.4的最新Composition API文档"

# 聚焦主题
"查看MongoDB关于性能优化的文档"
"获取TypeScript关于泛型的详细指南"
```

### 2. 团队协作建议

#### 统一配置

在团队中使用相同的Context7配置：

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    }
  }
}
```

#### 文档查询规范

建立团队的查询规范：

- 总是指定技术栈版本
- 使用主题聚焦获取精准信息
- 定期更新Context7到最新版本

## 🔄 更新和维护

### 版本更新

Context7会定期更新以支持更多库和改进性能：

```bash
# 使用最新版本
npx -y @upstash/context7-mcp@latest

# 检查当前版本
npx -y @upstash/context7-mcp --version
```

### 功能改进

关注项目更新以获得新功能：

- **库支持扩展**: 定期添加新的流行库
- **性能优化**: 持续改进文档检索速度
- **用户体验**: 优化AI交互体验

## 📚 相关资源

- [Context7 官方网站](https://context7.com)
- [GitHub 仓库](https://github.com/upstash/context7)
- [MCP 协议规范](https://modelcontextprotocol.io/docs)
- [Upstash 官方文档](https://upstash.com)
- [MCP Inspector 工具](https://github.com/modelcontextprotocol/inspector)

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进 Context7！

1. Fork 项目仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

---

> 💡 **提示**: Context7 是AI开发者的得力助手，它解决了AI模型训练数据滞后的问题。通过提供最新的技术文档，让您的AI助手能够基于准确、及时的信息协助开发工作，大大提升开发效率和代码质量。
