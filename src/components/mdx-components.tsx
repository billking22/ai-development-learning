import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// MDX组件映射
export const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'mt-8 mb-4 text-3xl font-bold tracking-tight text-foreground first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'mt-8 mb-4 text-2xl font-semibold tracking-tight text-foreground border-b pb-2',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'mt-6 mb-3 text-xl font-semibold tracking-tight text-foreground',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'mt-4 mb-2 text-lg font-semibold tracking-tight text-foreground',
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn('mb-4 leading-7 text-foreground/80', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('mb-4 ml-6 list-disc space-y-2', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('mb-4 ml-6 list-decimal space-y-2', className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn('leading-7 text-foreground/80', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        'mb-4 border-l-4 border-primary bg-muted/50 py-2 pl-6 italic text-foreground/90',
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      className={cn('rounded-md border max-w-full h-auto', className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-8 border-border" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="mb-4 w-full overflow-auto">
      <table
        className={cn('w-full border-collapse border border-border', className)}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn('border-b border-border', className)} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border border-border px-4 py-2 text-left font-semibold bg-muted text-foreground',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn('border border-border px-4 py-2 text-left text-foreground', className)}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        'mb-4 overflow-x-auto rounded-lg border bg-muted p-4 text-sm',
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'relative rounded bg-muted px-1.5 py-0.5 font-mono text-sm font-medium',
        className
      )}
      {...props}
    />
  ),
  a: ({ className, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith('http')
    
    if (isExternal) {
      return (
        <a
          className={cn(
            'font-medium text-primary underline underline-offset-4 hover:text-primary/80',
            className
          )}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      )
    }
    
    return (
      <Link
        href={href || ''}
        className={cn(
          'font-medium text-primary underline underline-offset-4 hover:text-primary/80',
          className
        )}
        {...props}
      />
    )
  },
  // 自定义组件
  Callout: ({ type = 'info', children, ...props }: {
    type?: 'info' | 'warning' | 'danger' | 'success'
    children: React.ReactNode
  }) => {
    const styles = {
      info: 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200',
      warning: 'border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200',
      danger: 'border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200',
      success: 'border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200',
    }
    
    return (
      <div
        className={cn(
          'mb-4 rounded-lg border p-4',
          styles[type]
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
} 