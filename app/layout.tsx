import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'AI 开发学习分享平台',
    template: '%s | AI 开发学习分享平台',
  },
  description: '一个专注于 AI 开发技术分享与学习的开源平台，收集和分享优质的 AI 开发资源、工具、提示词和最佳实践。',
  keywords: ['AI', 'AI开发', 'MCP', 'Figma', '提示词', '学习', '文档', 'Next.js'],
  authors: [{ name: 'AI Development Learning Community' }],
  creator: 'AI Development Learning Community',
  publisher: 'AI Development Learning Community',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ai-development-learning.vercel.app'),
  openGraph: {
    title: 'AI 开发学习分享平台',
    description: '一个专注于 AI 开发技术分享与学习的开源平台',
    url: 'https://ai-development-learning.vercel.app',
    siteName: 'AI 开发学习分享平台',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI 开发学习分享平台',
    description: '一个专注于 AI 开发技术分享与学习的开源平台',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background font-sans antialiased">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 