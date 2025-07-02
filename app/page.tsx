import Link from 'next/link'
import { ArrowRight, BookOpen, Cpu, Palette, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            🤖 AI 开发学习分享平台
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            专注于 AI 开发技术分享与学习的开源平台，收集和分享优质的 AI 开发资源、工具、提示词和最佳实践
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/docs/mcp"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              探索 MCP 工具
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/docs/prompts"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              查看提示词库
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">✨ 平台特性</h2>
            <p className="text-lg text-muted-foreground">
              为 AI 开发者提供全方位的学习和分享资源
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">MCP 工具集成</h3>
              <p className="text-sm text-muted-foreground">
                详细的 Model Context Protocol 工具使用指南和实践案例
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">提示词库</h3>
              <p className="text-sm text-muted-foreground">
                收集和分享高质量的 AI 提示词，提升开发效率
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">设计工具</h3>
              <p className="text-sm text-muted-foreground">
                Figma MCP 等设计相关 AI 工具的集成和使用
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">社区驱动</h3>
              <p className="text-sm text-muted-foreground">
                开放的贡献模式，欢迎所有开发者参与分享
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">📚 热门资源</h2>
            <p className="text-lg text-muted-foreground">
              查看我们精心整理的优质资源
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-xl font-semibold">🔧 MCP 工具集</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/docs/mcp/figma"
                    className="block rounded-md p-3 transition-colors hover:bg-muted"
                  >
                    <div className="font-medium">Figma MCP</div>
                    <div className="text-sm text-muted-foreground">
                      设计文件处理和资源提取工具
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-xl font-semibold">📝 提示词库</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/docs/prompts/frontend-developer"
                    className="block rounded-md p-3 transition-colors hover:bg-muted"
                  >
                    <div className="font-medium">Web 前端开发者</div>
                    <div className="text-sm text-muted-foreground">
                      专为前端开发优化的 AI 提示词
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">🚀 加入我们的社区</h2>
          <p className="mb-8 text-lg opacity-90">
            与其他 AI 开发者一起学习、分享和成长
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="https://github.com/billking22/ai-development-learning"
              className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90"
              target="_blank"
              rel="noopener noreferrer"
            >
              在 GitHub 上贡献
            </Link>
            <Link
              href="https://github.com/billking22/ai-development-learning/discussions"
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              加入讨论
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}