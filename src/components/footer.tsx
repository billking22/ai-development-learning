import Link from 'next/link'
import { Github, Mail, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="mb-2 text-lg font-semibold">🤖 AI 开发学习分享平台</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              专注于 AI 开发技术分享与学习的开源平台，收集和分享优质的 AI 开发资源、工具、提示词和最佳实践。
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/billking22/ai-development-learning"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:your-email@example.com"
                className="text-muted-foreground hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs/mcp" className="text-muted-foreground hover:text-primary">
                  MCP 工具
                </Link>
              </li>
              <li>
                <Link href="/docs/prompts" className="text-muted-foreground hover:text-primary">
                  提示词库
                </Link>
              </li>

              <li>
                <Link
                  href="https://github.com/billking22/ai-development-learning/issues"
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  提交问题
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">资源</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs/mcp/figma" className="text-muted-foreground hover:text-primary">
                  Figma MCP
                </Link>
              </li>
              <li>
                <Link href="/docs/prompts/frontend-developer" className="text-muted-foreground hover:text-primary">
                  前端开发提示词
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/billking22/ai-development-learning/blob/main/CONTRIBUTING.md"
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  贡献指南
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/billking22/ai-development-learning/discussions"
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  社区讨论
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 AI 开发学习分享平台. 基于 MIT 许可证开源.
            </p>
            <p className="mt-2 flex items-center text-sm text-muted-foreground md:mt-0">
              使用 <Heart className="mx-1 h-3 w-3 text-red-500" /> 和 Next.js 构建
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 