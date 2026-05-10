import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Apple brand & accent
        primary: '#0066cc',
        'primary-focus': '#0071e3',
        'primary-on-dark': '#2997ff',
        // Apple surfaces
        canvas: '#ffffff',
        parchment: '#f5f5f7',
        pearl: '#fafafc',
        'tile-1': '#272729',
        'tile-2': '#2a2a2c',
        'tile-3': '#252527',
        'tile-black': '#000000',
        // Apple text
        ink: '#1d1d1f',
        'ink-muted': '#333333',
        'ink-faint': '#7a7a7a',
        'muted-dark': '#cccccc',
        // Apple borders
        hairline: '#e0e0e0',
        divider: '#f0f0f0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'apple-tight': '-0.374px',
        'apple-hero': '-0.28px',
        'apple-nav': '-0.12px',
        'apple-caption': '-0.224px',
      },
      lineHeight: {
        'apple-hero': '1.07',
        'apple-display': '1.10',
        'apple-body': '1.47',
        'apple-caption': '1.43',
        'apple-dense': '2.41',
      },
      borderRadius: {
        pill: '9999px',
        apple: '18px',
        'apple-sm': '8px',
        'apple-md': '11px',
      },
      boxShadow: {
        'apple-product': 'rgba(0, 0, 0, 0.22) 3px 5px 30px 0px',
      },
    },
  },
  plugins: [],
}
export default config
