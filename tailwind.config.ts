import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        /* Main Primary color */
        white: '#FFFFFF',
        'vl-blue': '#D4F1F4',
        'l-blue': '#80C1CA',
        'd-blue': '#189AB4',
        'dd-blue': '#05445E',
        
        /* Main Secondary color (1) */
        'vl-purple': '#E1E7F9',
        'l-purple': '#8C9ED3',
        'd-purple': '#6175B2',
        
        /* Main Secondary color (2) */
        'vl-yellow': '#FFF6E3',
        'l-yellow': '#FFE19F',
        'd-yellow': '#FFD67C',
        
        /* Main Complement color */
        'vl-organe': '#FFF0E3',
        'l-organe': '#FFCD9F',
        'dl-organe': '#FFBB7C',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
