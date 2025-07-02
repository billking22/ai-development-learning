# 🤝 贡献指南

感谢您对 AI 开发学习分享平台的关注和支持！我们欢迎所有形式的贡献，无论是提交代码、完善文档、报告问题还是提出建议。(强烈推荐利用ai完成)

## 📋 贡献方式

### 🐛 报告问题

如果您发现了 bug 或有改进建议，请：

1. 在 [Issues](https://github.com/your-username/ai-development-learning/issues) 中搜索是否已有相关问题
2. 如果没有，请创建新的 Issue，使用相应的模板
3. 提供尽可能详细的信息，包括复现步骤和环境信息

### ✨ 提交功能请求

如果您有新功能的想法：

1. 查看现有的 [Issues](https://github.com/your-username/ai-development-learning/issues) 和 [Discussions](https://github.com/your-username/ai-development-learning/discussions)
2. 如果是新想法，请创建 Feature Request Issue
3. 详细描述功能需求和使用场景

### 📝 贡献内容

我们特别欢迎以下类型的内容贡献：

#### MCP 工具

- 新的 MCP 工具使用指南
- 现有工具的最佳实践
- 配置示例和故障排除

#### 提示词库

- 各个领域的专业提示词
- 提示词使用技巧和优化
- 实际应用案例

#### 文档改进

- 修正错误和更新过时信息
- 改进文档结构和可读性
- 添加示例和说明

### 💻 代码贡献

#### 开发环境设置

1. **Fork 并克隆仓库**

   ```bash
   git clone https://github.com/your-username/ai-development-learning.git
   cd ai-development-learning
   ```

2. **安装依赖**

   ```bash
   pnpm install
   ```

3. **启动开发服务器**

   ```bash
   pnpm dev
   ```

4. **创建功能分支**
   ```bash
   git checkout -b feature/your-feature-name
   ```

#### 开发规范

- **代码风格**: 使用 ESLint 和 Prettier 保持代码一致性
- **提交信息**: 遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范
- **测试**: 添加必要的测试用例
- **文档**: 更新相关文档

#### 提交流程

1. **确保代码质量**

   ```bash
   pnpm lint          # 检查代码规范
   pnpm type-check    # TypeScript 类型检查
   pnpm format        # 格式化代码
   ```

2. **提交更改**

   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

3. **推送到 GitHub**

   ```bash
   git push origin feature/your-feature-name
   ```

4. **创建 Pull Request**
   - 使用提供的 PR 模板
   - 详细描述更改内容
   - 关联相关的 Issues

## 📋 内容标准

### 文档撰写规范

- **语言**: 主要使用中文，技术术语可适当使用英文
- **格式**: 使用 Markdown 格式
- **结构**: 清晰的标题层级和段落组织
- **示例**: 提供实际可用的代码示例

### 代码规范

- **TypeScript**: 优先使用 TypeScript
- **组件**: 使用函数组件和 Hooks
- **样式**: 使用 Tailwind CSS
- **命名**: 使用语义化的命名

### 提交信息规范

```
type(scope): description

[optional body]

[optional footer]
```

**类型 (type):**

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

## 🎯 优先级指南

我们特别欢迎以下类型的贡献：

### 高优先级 🔥

- 修复影响用户使用的 bug
- 重要功能的文档完善
- 安全性相关的改进

### 中优先级 📋

- 新的 MCP 工具指南
- 提示词库扩充
- 用户体验改进

### 低优先级 🎨

- 代码重构和优化
- 非核心功能添加
- 样式调整

## 📞 获取帮助

如果您在贡献过程中遇到问题：

- 📝 查看现有的 [Issues](https://github.com/your-username/ai-development-learning/issues)
- 💬 在 [Discussions](https://github.com/your-username/ai-development-learning/discussions) 中提问
- 📧 发送邮件至 [your-email@example.com](mailto:your-email@example.com)

## 🏆 贡献者

我们感谢所有为这个项目做出贡献的开发者！

<a href="https://github.com/your-username/ai-development-learning/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=your-username/ai-development-learning" />
</a>

## 📄 许可证

通过贡献代码，您同意您的贡献将在 [MIT License](LICENSE) 下进行许可。

---

**再次感谢您的贡献！** �� 您的每一份努力都让这个平台变得更好。
