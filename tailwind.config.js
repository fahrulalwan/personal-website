module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        twitter: '#1DA1F2',
        linkedIn: '#2867B2',
        github: '#333333',
      },
      typography: theme => ({
        dark: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.blue.300'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            code: {
              color: theme('colors.gray.100'),
            },
            strong: {
              color: theme('colors.gray.100'),
            },
            blockquote: {
              p: {
                color: theme('colors.gray.100'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['responsive', 'dark'],
    ringColor: ['hover', 'active', 'dark'],
    ringOffsetWidth: ['hover', 'active', 'dark'],
    ringOffsetColor: ['hover', 'active', 'dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};
