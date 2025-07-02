import { getDocCategories, getDocsInCategory } from '@/lib/docs'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, FileText } from 'lucide-react'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateStaticParams() {
  const categories = getDocCategories()
  
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const docs = getDocsInCategory(params.category)
  
  if (docs.length === 0) {
    notFound()
  }

  const categories = getDocCategories()
  const currentCategory = categories.find(cat => cat.slug === params.category)
  
  if (!currentCategory) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 分类标题 */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{currentCategory.emoji}</span>
          <h1 className="text-3xl font-bold">{currentCategory.name}</h1>
        </div>
        <p className="text-lg text-foreground/70">{currentCategory.description}</p>
        <div className="mt-4">
          <Badge variant="secondary">
            <FileText className="mr-1 h-3 w-3" />
            {docs.length} 篇文档
          </Badge>
        </div>
      </div>

      {/* 文档列表 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {docs.map((doc) => (
          <Card key={doc.slug} className="h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="line-clamp-2">
                <Link 
                  href={`/docs/${params.category}/${doc.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {doc.title}
                </Link>
              </CardTitle>
              {doc.description && (
                <CardDescription className="line-clamp-3">
                  {doc.description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-foreground/60">
                <CalendarDays className="mr-1 h-3 w-3" />
                {new Date(doc.updatedAt).toLocaleDateString('zh-CN')}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 