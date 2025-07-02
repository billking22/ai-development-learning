import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface DocItem {
  slug: string
  title: string
  description?: string
  category: string
  content: string
  updatedAt: string
  filePath: string
}

export interface DocCategory {
  name: string
  slug: string
  description: string
  emoji: string
  items: DocItem[]
}

const docsDirectory = path.join(process.cwd(), 'docs')

// 获取所有文档分类
export function getDocCategories(): DocCategory[] {
  const categories: DocCategory[] = []
  
  if (!fs.existsSync(docsDirectory)) {
    return categories
  }

  const categoryDirs = fs.readdirSync(docsDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  for (const categorySlug of categoryDirs) {
    const categoryPath = path.join(docsDirectory, categorySlug)
    const docs = getDocsInCategory(categorySlug)
    
    // 根据分类设置元信息
    const categoryInfo = getCategoryInfo(categorySlug)
    
    categories.push({
      slug: categorySlug,
      name: categoryInfo.name,
      description: categoryInfo.description,
      emoji: categoryInfo.emoji,
      items: docs
    })
  }

  return categories
}

// 获取指定分类下的所有文档
export function getDocsInCategory(category: string): DocItem[] {
  const categoryPath = path.join(docsDirectory, category)
  
  if (!fs.existsSync(categoryPath)) {
    return []
  }

  const files = fs.readdirSync(categoryPath)
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))

  return files.map(file => {
    const filePath = path.join(categoryPath, file)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    const stats = fs.statSync(filePath)
    
    const slug = file.replace(/\.(md|mdx)$/, '')
    
    return {
      slug,
      title: data.title || formatTitle(slug),
      description: data.description || extractDescription(content),
      category,
      content,
      updatedAt: stats.mtime.toISOString(),
      filePath: path.relative(process.cwd(), filePath)
    }
  }).sort((a, b) => a.title.localeCompare(b.title))
}

// 获取特定文档
export function getDoc(category: string, slug: string): DocItem | null {
  const filePath = path.join(docsDirectory, category, `${slug}.md`)
  const mdxPath = path.join(docsDirectory, category, `${slug}.mdx`)
  
  let targetPath = filePath
  if (!fs.existsSync(filePath) && fs.existsSync(mdxPath)) {
    targetPath = mdxPath
  }
  
  if (!fs.existsSync(targetPath)) {
    return null
  }

  const fileContent = fs.readFileSync(targetPath, 'utf8')
  const { data, content } = matter(fileContent)
  const stats = fs.statSync(targetPath)

  return {
    slug,
    title: data.title || formatTitle(slug),
    description: data.description || extractDescription(content),
    category,
    content,
    updatedAt: stats.mtime.toISOString(),
    filePath: path.relative(process.cwd(), targetPath)
  }
}

// 搜索文档
export function searchDocs(query: string): DocItem[] {
  const categories = getDocCategories()
  const allDocs = categories.flatMap(cat => cat.items)
  
  if (!query.trim()) return allDocs

  const searchTerm = query.toLowerCase()
  
  return allDocs.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm) ||
    doc.description?.toLowerCase().includes(searchTerm) ||
    doc.content.toLowerCase().includes(searchTerm)
  ).sort((a, b) => {
    // 标题匹配优先
    const aTitleMatch = a.title.toLowerCase().includes(searchTerm)
    const bTitleMatch = b.title.toLowerCase().includes(searchTerm)
    
    if (aTitleMatch && !bTitleMatch) return -1
    if (!aTitleMatch && bTitleMatch) return 1
    
    return a.title.localeCompare(b.title)
  })
}

// 工具函数：格式化标题
function formatTitle(slug: string): string {
  return slug
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// 工具函数：提取描述
function extractDescription(content: string): string {
  // 移除markdown语法，提取前150个字符作为描述
  const plainText = content
    .replace(/^#.*$/gm, '') // 移除标题
    .replace(/\*\*(.*?)\*\*/g, '$1') // 移除粗体
    .replace(/\*(.*?)\*/g, '$1') // 移除斜体
    .replace(/`(.*?)`/g, '$1') // 移除行内代码
    .replace(/```[\s\S]*?```/g, '') // 移除代码块
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 移除链接，保留文本
    .replace(/\n\s*\n/g, '\n') // 合并多行空白
    .trim()

  const firstParagraph = plainText.split('\n')[0] || ''
  return firstParagraph.length > 150 
    ? firstParagraph.substring(0, 150) + '...'
    : firstParagraph
}

// 工具函数：获取分类信息
function getCategoryInfo(slug: string): { name: string; description: string; emoji: string } {
  const categoryMap: Record<string, { name: string; description: string; emoji: string }> = {
    mcp: {
      name: 'MCP 工具',
      description: 'Model Context Protocol 工具集成和使用指南',
      emoji: '🔧'
    },
    prompts: {
      name: '提示词库',
      description: '高质量的 AI 提示词和最佳实践',
      emoji: '📝'
    },
    tutorials: {
      name: '教程指南',
      description: '详细的学习教程和实践指南',
      emoji: '📚'
    },
    examples: {
      name: '示例代码',
      description: '实际应用案例和代码示例',
      emoji: '💡'
    }
  }

  return categoryMap[slug] || {
    name: formatTitle(slug),
    description: `${formatTitle(slug)}相关文档`,
    emoji: '📄'
  }
} 