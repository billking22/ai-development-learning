/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            '--tw-prose-body': 'hsl(var(--tw-prose-body))',
            '--tw-prose-headings': 'hsl(var(--tw-prose-headings))',
            '--tw-prose-lead': 'hsl(var(--tw-prose-lead))',
            '--tw-prose-links': 'hsl(var(--tw-prose-links))',
            '--tw-prose-bold': 'hsl(var(--tw-prose-bold))',
            '--tw-prose-counters': 'hsl(var(--tw-prose-counters))',
            '--tw-prose-bullets': 'hsl(var(--tw-prose-bullets))',
            '--tw-prose-hr': 'hsl(var(--tw-prose-hr))',
            '--tw-prose-quotes': 'hsl(var(--tw-prose-quotes))',
            '--tw-prose-quote-borders': 'hsl(var(--tw-prose-quote-borders))',
            '--tw-prose-captions': 'hsl(var(--tw-prose-captions))',
            '--tw-prose-code': 'hsl(var(--tw-prose-code))',
            '--tw-prose-pre-code': 'hsl(var(--tw-prose-pre-code))',
            '--tw-prose-pre-bg': 'hsl(var(--tw-prose-pre-bg))',
            '--tw-prose-th-borders': 'hsl(var(--tw-prose-th-borders))',
            '--tw-prose-td-borders': 'hsl(var(--tw-prose-td-borders))',
            '--tw-prose-invert-body': 'hsl(var(--tw-prose-invert-body))',
            '--tw-prose-invert-headings': 'hsl(var(--tw-prose-invert-headings))',
            '--tw-prose-invert-lead': 'hsl(var(--tw-prose-invert-lead))',
            '--tw-prose-invert-links': 'hsl(var(--tw-prose-invert-links))',
            '--tw-prose-invert-bold': 'hsl(var(--tw-prose-invert-bold))',
            '--tw-prose-invert-counters': 'hsl(var(--tw-prose-invert-counters))',
            '--tw-prose-invert-bullets': 'hsl(var(--tw-prose-invert-bullets))',
            '--tw-prose-invert-hr': 'hsl(var(--tw-prose-invert-hr))',
            '--tw-prose-invert-quotes': 'hsl(var(--tw-prose-invert-quotes))',
            '--tw-prose-invert-quote-borders': 'hsl(var(--tw-prose-invert-quote-borders))',
            '--tw-prose-invert-captions': 'hsl(var(--tw-prose-invert-captions))',
            '--tw-prose-invert-code': 'hsl(var(--tw-prose-invert-code))',
            '--tw-prose-invert-pre-code': 'hsl(var(--tw-prose-invert-pre-code))',
            '--tw-prose-invert-pre-bg': 'hsl(var(--tw-prose-invert-pre-bg))',
            '--tw-prose-invert-th-borders': 'hsl(var(--tw-prose-invert-th-borders))',
            '--tw-prose-invert-td-borders': 'hsl(var(--tw-prose-invert-td-borders))',
            color: 'var(--tw-prose-body)',
            p: {
              color: 'var(--tw-prose-body)',
            },
            strong: {
              color: 'var(--tw-prose-bold)',
              fontWeight: '600',
            },
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              color: 'var(--tw-prose-headings)',
            },
            h2: {
              color: 'var(--tw-prose-headings)',
            },
            h3: {
              color: 'var(--tw-prose-headings)',
            },
            h4: {
              color: 'var(--tw-prose-headings)',
            },
            h5: {
              color: 'var(--tw-prose-headings)',
            },
            h6: {
              color: 'var(--tw-prose-headings)',
            },
            blockquote: {
              color: 'var(--tw-prose-quotes)',
              borderLeftColor: 'var(--tw-prose-quote-borders)',
            },
            code: {
              color: 'var(--tw-prose-code)',
              backgroundColor: 'hsl(var(--muted))',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '600',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              color: 'var(--tw-prose-pre-code)',
              backgroundColor: 'var(--tw-prose-pre-bg)',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
              border: '1px solid hsl(var(--border))',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              fontWeight: 'normal',
            },
            '[data-rehype-pretty-code-fragment]': {
              position: 'relative',
            },
            ul: {
              color: 'var(--tw-prose-body)',
            },
            ol: {
              color: 'var(--tw-prose-body)',
            },
            li: {
              color: 'var(--tw-prose-body)',
            },
            'ul > li::marker': {
              color: 'var(--tw-prose-bullets)',
            },
            'ol > li::marker': {
              color: 'var(--tw-prose-counters)',
            },
            table: {
              borderColor: 'var(--tw-prose-th-borders)',
            },
            thead: {
              borderBottomColor: 'var(--tw-prose-th-borders)',
            },
            'thead th': {
              color: 'var(--tw-prose-headings)',
              borderColor: 'var(--tw-prose-th-borders)',
            },
            'tbody td': {
              color: 'var(--tw-prose-body)',
              borderColor: 'var(--tw-prose-td-borders)',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': 'hsl(var(--tw-prose-invert-body))',
            '--tw-prose-headings': 'hsl(var(--tw-prose-invert-headings))',
            '--tw-prose-lead': 'hsl(var(--tw-prose-invert-lead))',
            '--tw-prose-links': 'hsl(var(--tw-prose-invert-links))',
            '--tw-prose-bold': 'hsl(var(--tw-prose-invert-bold))',
            '--tw-prose-counters': 'hsl(var(--tw-prose-invert-counters))',
            '--tw-prose-bullets': 'hsl(var(--tw-prose-invert-bullets))',
            '--tw-prose-hr': 'hsl(var(--tw-prose-invert-hr))',
            '--tw-prose-quotes': 'hsl(var(--tw-prose-invert-quotes))',
            '--tw-prose-quote-borders': 'hsl(var(--tw-prose-invert-quote-borders))',
            '--tw-prose-captions': 'hsl(var(--tw-prose-invert-captions))',
            '--tw-prose-code': 'hsl(var(--tw-prose-invert-code))',
            '--tw-prose-pre-code': 'hsl(var(--tw-prose-invert-pre-code))',
            '--tw-prose-pre-bg': 'hsl(var(--tw-prose-invert-pre-bg))',
            '--tw-prose-th-borders': 'hsl(var(--tw-prose-invert-th-borders))',
            '--tw-prose-td-borders': 'hsl(var(--tw-prose-invert-td-borders))',
            color: 'var(--tw-prose-body)',
            p: {
              color: 'var(--tw-prose-body)',
            },
            strong: {
              color: 'var(--tw-prose-bold)',
              fontWeight: '600',
            },
            a: {
              color: 'var(--tw-prose-links)',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: { color: 'var(--tw-prose-headings)' },
            h2: { color: 'var(--tw-prose-headings)' },
            h3: { color: 'var(--tw-prose-headings)' },
            h4: { color: 'var(--tw-prose-headings)' },
            h5: { color: 'var(--tw-prose-headings)' },
            h6: { color: 'var(--tw-prose-headings)' },
            blockquote: {
              color: 'var(--tw-prose-quotes)',
              borderLeftColor: 'var(--tw-prose-quote-borders)',
            },
            code: {
              color: 'var(--tw-prose-code)',
              backgroundColor: 'hsl(var(--muted))',
              '&::before': { content: '""' },
              '&::after': { content: '""' },
            },
            pre: {
              color: 'var(--tw-prose-pre-code)',
              backgroundColor: 'var(--tw-prose-pre-bg)',
            },
            'pre code': {
              color: 'var(--tw-prose-pre-code)',
            },
            ul: { color: 'var(--tw-prose-body)' },
            ol: { color: 'var(--tw-prose-body)' },
            li: { color: 'var(--tw-prose-body)' },
            'ul > li::marker': { color: 'var(--tw-prose-bullets)' },
            'ol > li::marker': { color: 'var(--tw-prose-counters)' },
            'thead th': {
              color: 'var(--tw-prose-headings)',
              borderColor: 'var(--tw-prose-th-borders)',
            },
            'tbody td': {
              color: 'var(--tw-prose-body)',
              borderColor: 'var(--tw-prose-td-borders)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} 