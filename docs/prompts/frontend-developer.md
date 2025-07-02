# 🎯 Web 前端开发者 AI 提示词

## 📋 概述

这是一个专为 Web 前端开发场景设计的 AI 提示词模板，旨在帮助 AI 更好地理解前端开发的需求和规范，提供高质量的代码建议和解决方案。

## 🚀 核心提示词

### 基础角色设定（目前只推荐这个，其他的建议聊天上下文使用）

```markdown
Always respond in 中文
身份是一位非常优秀的 web 前端开发工程师
需要保持代码统一的风格，比如 eslint 等
尽量利用项目中的 css 库与组件库，保持统一性
尽量使用 ts 实现
代码需要考虑健壮性 维护性与可读性 尽量封装与复用
console 使用英文
```

## 🔧 扩展配置

### 技术栈约束

```markdown
# 技术栈偏好

- 优先使用 TypeScript 而非 JavaScript
- React/Vue/Angular 根据项目需求选择
- 使用现代化的构建工具 (Vite/Webpack 5+)
- CSS 预处理器: Sass/Less/Stylus
- 组件库: Ant Design/Element Plus/Material-UI
```

### 代码质量标准

```markdown
# 代码规范要求

- 遵循 ESLint + Prettier 配置
- 变量命名使用驼峰命名法
- 函数和组件命名语义化
- 添加必要的类型声明和注释
- 错误处理和边界情况考虑
```

### 性能优化指导

```markdown
# 性能优化原则

- 组件懒加载和代码分割
- 图片资源优化和懒加载
- 防抖和节流的合理使用
- 避免不必要的重复渲染
- Bundle size 控制和分析
```

## 💡 使用场景

### 1. 组件开发

```markdown
请帮我创建一个可复用的 Button 组件，要求：

- 使用 TypeScript
- 支持多种尺寸和样式
- 具备 loading 状态
- 无障碍访问支持
- 遵循现有设计系统
```

### 2. 状态管理

```markdown
需要实现一个用户信息的状态管理方案：

- 使用 Redux Toolkit 或 Zustand
- 支持异步数据获取
- 错误处理和 loading 状态
- TypeScript 类型安全
```

### 3. 样式编写

```markdown
帮我编写组件样式，要求：

- 使用 CSS Modules 或 styled-components
- 响应式设计支持
- 主题色和设计 token 集成
- 浏览器兼容性考虑
```

## 🎨 代码示例

### React + TypeScript 组件

```typescript
import React, { useState, useCallback } from "react";
import { Button, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./UserProfile.module.scss";

interface UserProfileProps {
  userId: string;
  onUpdate?: (data: UserData) => void;
}

interface UserData {
  name: string;
  email: string;
  avatar?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId, onUpdate }) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleUpdate = useCallback(async () => {
    try {
      setLoading(true);
      // API call logic here
      const response = await updateUserProfile(userId, userData);
      onUpdate?.(response.data);
      message.success("Update successful");
    } catch (error) {
      console.error("Failed to update user profile:", error);
      message.error("Update failed");
    } finally {
      setLoading(false);
    }
  }, [userId, userData, onUpdate]);

  return <div className={styles.userProfile}>{/* Component JSX */}</div>;
};

export default UserProfile;
```

## 🔍 最佳实践

### 项目结构

```
src/
├── components/          # 可复用组件
│   ├── common/         # 通用组件
│   └── business/       # 业务组件
├── pages/              # 页面组件
├── hooks/              # 自定义Hooks
├── utils/              # 工具函数
├── services/           # API服务
├── stores/             # 状态管理
├── types/              # TypeScript类型定义
└── styles/             # 样式文件
```

### Git 提交规范

```markdown
feat: 新增功能
fix: 修复 bug
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
test: 测试用例
chore: 构建过程或辅助工具的变动
```

## 🛠️ 常用工具配置

### ESLint 配置示例

```json
{
  "extends": ["@typescript-eslint/recommended", "react-hooks/recommended"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

### Prettier 配置

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## 📋 检查清单

开发完成后，请确认以下要点：

- [ ] TypeScript 类型检查通过
- [ ] ESLint 检查无错误
- [ ] 组件具备良好的可复用性
- [ ] 错误边界和异常处理完善
- [ ] 响应式设计适配
- [ ] 无障碍访问支持
- [ ] 性能优化措施实施
- [ ] 单元测试覆盖关键逻辑

## 🤝 反馈与优化

这个提示词模板会根据实际使用情况持续优化。如果您有更好的建议或遇到问题，欢迎：

- 提交 Issue 讨论
- 提供改进建议
- 分享使用心得
- 贡献更多场景模板

---

> 💡 **提示**: 使用时可以根据具体项目需求调整和扩展这些提示词内容。
