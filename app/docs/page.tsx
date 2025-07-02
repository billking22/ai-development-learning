import { getDocCategories } from '@/lib/docs'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Search } from 'lucide-react'

export default function DocsPage() {
  const categories = getDocCategories()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">文档中心</h1>
        <p className="text-lg text-foreground/70">
          探索 AI 开发工具、提示词库和最佳实践
        </p>
      </div>

      {/* 搜索栏 */}
      <div className="mb-8 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/60 h-4 w-4" />
          <input
            type="text"
            placeholder="搜索文档..."
            className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          />
        </div>
      </div>

      {/* 分类卡片 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.slug} className="h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{category.emoji}</span>
                <CardTitle>
                  <Link 
                    href={`/docs/${category.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </CardTitle>
              </div>
              <CardDescription>
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">
                  <FileText className="mr-1 h-3 w-3" />
                  {category.items.length} 篇文档
                </Badge>
                <Link 
                  href={`/docs/${category.slug}`}
                  className="text-sm text-primary hover:underline"
                >
                  查看全部 →
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 空状态 */}
      {categories.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-lg font-semibold mb-2">暂无文档</h3>
          <p className="text-foreground/70">
            文档正在整理中，敬请期待...
          </p>
        </div>
      )}

      {/* 统计信息 */}
      {categories.length > 0 && (
        <div className="mt-12 pt-8 border-t text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-2xl font-bold text-primary">
                {categories.length}
              </div>
              <div className="text-sm text-foreground/60">分类</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {categories.reduce((acc, cat) => acc + cat.items.length, 0)}
              </div>
              <div className="text-sm text-foreground/60">文档</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {categories.filter(cat => cat.slug === 'mcp').length > 0 ? 
                  categories.find(cat => cat.slug === 'mcp')?.items.length || 0 : 0}
              </div>
              <div className="text-sm text-foreground/60">MCP 工具</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {categories.filter(cat => cat.slug === 'prompts').length > 0 ? 
                  categories.find(cat => cat.slug === 'prompts')?.items.length || 0 : 0}
              </div>
              <div className="text-sm text-foreground/60">提示词</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 