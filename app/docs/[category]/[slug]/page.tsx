import { getDoc, getDocCategories, getDocsInCategory } from '@/lib/docs'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/mdx-components'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CalendarDays, ArrowLeft, Edit, Github } from 'lucide-react'

interface DocPageProps {
  params: {
    category: string
    slug: string
  }
}

export async function generateStaticParams() {
  const categories = getDocCategories()
  const paths: { category: string; slug: string }[] = []
  
  for (const category of categories) {
    const docs = getDocsInCategory(category.slug)
    for (const doc of docs) {
      paths.push({
        category: category.slug,
        slug: doc.slug,
      })
    }
  }
  
  return paths
}

export async function generateMetadata({ params }: DocPageProps) {
  const doc = getDoc(params.category, params.slug)
  
  if (!doc) {
    return {
      title: '文档未找到',
    }
  }

  return {
    title: `${doc.title} | AI 开发学习分享平台`,
    description: doc.description,
  }
}

export default function DocPage({ params }: DocPageProps) {
  const doc = getDoc(params.category, params.slug)
  
  if (!doc) {
    notFound()
  }

  const categories = getDocCategories()
  const currentCategory = categories.find(cat => cat.slug === params.category)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 导航栏 */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/docs/${params.category}`}>
              <ArrowLeft className="mr-1 h-4 w-4" />
              返回 {currentCategory?.name}
            </Link>
          </Button>
        </div>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{doc.title}</h1>
            {doc.description && (
              <p className="text-lg text-foreground/70">{doc.description}</p>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link
                href={`https://github.com/billking22/ai-development-learning/edit/main/${doc.filePath}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Edit className="mr-1 h-3 w-3" />
                编辑此页
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link
                href={`https://github.com/billking22/ai-development-learning/blob/main/${doc.filePath}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1 h-3 w-3" />
                查看源码
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mt-4 text-sm text-foreground/60">
          <div className="flex items-center">
            <CalendarDays className="mr-1 h-3 w-3" />
            更新于 {new Date(doc.updatedAt).toLocaleDateString('zh-CN')}
          </div>
          <Badge variant="secondary">
            {currentCategory?.emoji} {currentCategory?.name}
          </Badge>
        </div>
      </div>

      {/* 文档内容 */}
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <MDXRemote source={doc.content} components={mdxComponents} />
      </article>
      
      {/* 页脚导航 */}
      <div className="mt-12 pt-8 border-t">
        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href={`/docs/${params.category}`}>
              <ArrowLeft className="mr-1 h-4 w-4" />
              返回 {currentCategory?.name}
            </Link>
          </Button>
          
          <div className="text-sm text-foreground/60">
            在 GitHub 上
            <Link
              href={`https://github.com/billking22/ai-development-learning/blob/main/${doc.filePath}`}
              className="ml-1 text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              查看此文档
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 