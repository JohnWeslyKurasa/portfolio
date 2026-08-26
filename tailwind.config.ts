import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        warmIvoryBg: '#FAF7F0',
        softCreamSurface: '#F3EEE3',
        pureIvoryCard: '#FFFDF8',
        deepCharcoalText: '#1C1C1C',
        warmGrayText: '#6B665D',
        richGold: '#C99A2E',
        champagneGold: '#E7C66A',
        softGoldBorder: '#DCCB9A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
