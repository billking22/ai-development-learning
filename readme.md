# 🤖 AI 开发学习分享平台

<div align="center">
  <p>一个专注于AI开发技术分享与学习的开源平台</p>
  <p>
    <a href="#特性">特性</a> •
    <a href="#快速开始">快速开始</a> •
    <a href="#贡献指南">贡献</a> •
    <a href="#许可证">许可证</a>
  </p>
</div>

---

## 📋 项目概述

这是一个专为 AI 开发者打造的学习分享平台，旨在收集、整理和分享 AI 开发过程中的优质资源、工具、提示词和最佳实践。我们欢迎所有对 AI 开发感兴趣的开发者参与贡献。

## ✨ 特性

- 🔧 **MCP 工具集成** - 详细的 Model Context Protocol 工具使用指南
- 📝 **提示词库** - 收集和分享高质量的 AI 提示词
- 🎨 **设计工具** - Figma MCP 等设计相关 AI 工具
- 🌐 **在线文档** - 基于现代技术栈的可视化文档网站
- 🤝 **社区驱动** - 开放的贡献模式，欢迎 PR 和 Issues

## 📁 项目结构

```
ai-development-learning/
├── readme.md                 # 项目说明文档
├── src/                      # 源文件目录
│   ├── assets/              # 静态资源
│   │   └── figma.md        # Figma MCP使用指南
│   └── prompt/             # AI提示词集合
│       └── web前端开发者.md  # 前端开发提示词
├── docs/                    # 文档网站源码 (待创建)
├── .github/                 # GitHub模板和工作流
│   ├── ISSUE_TEMPLATE/     # Issue模板
│   └── PULL_REQUEST_TEMPLATE.md # PR模板
└── package.json            # 项目配置
```

## 🚀 快速开始

### 本地运行文档网站

```bash
# 克隆仓库
git clone https://github.com/billking22/ai-development-learning.git
cd ai-development-learning

# 安装依赖 (使用 pnpm)
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

### 浏览在线文档

访问我们的在线文档站点：[https://ai-development-learning.vercel.app](https://ai-development-learning.vercel.app)

## 📚 内容分类

### 🔧 MCP 工具集

- [Figma MCP](src/mcp/figma.md) - 设计文件处理和资源提取

### 📝 提示词库

- [Web 前端开发者](src/prompt/web前端开发者.md) - 前端开发专用提示词

### 🎯 使用场景

- **设计开发协作** - 使用 Figma MCP 自动化设计资源处理
- **代码生成优化** - 通过专业提示词提升 AI 代码生成质量
- **开发流程规范** - 标准化的开发和协作流程

## 🤝 贡献指南

我们非常欢迎您的贡献！请遵循以下步骤：

### 提交新内容

1. **Fork** 此仓库
2. **创建分支** (`git checkout -b feature/amazing-feature`)
3. **添加内容** - 在相应目录下添加您的文档或工具
4. **提交更改** (`git commit -m 'Add: 新增XXX功能'`)
5. **推送分支** (`git push origin feature/amazing-feature`)
6. **创建 Pull Request**

### 贡献类型

- 📖 **文档贡献** - 完善现有文档或添加新的使用指南
- 🔧 **工具分享** - 分享有用的 AI 开发工具和配置
- 💡 **提示词贡献** - 分享高质量的 AI 提示词
- 🐛 **问题修复** - 修复文档错误或改进内容结构
- 💬 **讨论交流** - 通过 Issues 参与讨论和提问

### 内容标准

- 内容必须与 AI 开发相关
- 提供清晰的使用说明和示例
- 遵循现有的文档格式和结构
- 确保内容的准确性和实用性

## 📋 开发规范

- 💻 使用 **TypeScript** 进行开发
- 🎨 遵循 **ESLint** 代码规范
- 📖 文档使用 **Markdown** 格式
- 🔧 包管理使用 **pnpm**
- 🚀 部署平台使用 **Vercel**

## 🛠️ 技术栈

- **文档引擎**: Next.js + MDX
- **样式方案**: Tailwind CSS
- **包管理器**: pnpm
- **部署平台**: Vercel
- **版本控制**: Git + GitHub

## 📈 路线图

- [x] 基础项目结构搭建
- [x] Figma MCP 文档完善
- [x] GitHub 模板配置
- [ ] 在线文档网站开发
- [ ] 更多 MCP 工具集成
- [ ] 提示词库扩充
- [ ] 社区互动功能
- [ ] 多语言支持

## 👥 贡献者

感谢所有为这个项目做出贡献的开发者！

<a href="https://github.com/billking22/ai-development-learning/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=billking22/ai-development-learning" />
</a>

## 📞 联系我们

- 📧 **Email**: your-email@example.com
- 💬 **Discussions**: [GitHub Discussions](https://github.com/billking22/ai-development-learning/discussions)
- 🐛 **Issues**: [GitHub Issues](https://github.com/billking22/ai-development-learning/issues)

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源。

---

<div align="center">
  <p>⭐ 如果这个项目对你有帮助，请给我们一个Star！</p>
  <p>🚀 让我们一起推动AI开发技术的发展！</p>
</div>
