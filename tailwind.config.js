/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['CircularStd', 'sans-serif'],
        mono: ['SFMono', 'monospace'],
      },
      fontWeight: {
        // Map Tailwind's regular (400) to the book font (450)
        normal: '450',
        // Medium weight
        medium: '500',
        // Bold weight
        bold: '700',
      },
    },
  },
  plugins: [],
}
