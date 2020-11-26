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
        DEFAULT: {
          css: {
            color: '#374151',
            a: {
              color: theme('colors.indigo.600'),
            },
            h2: {
              color: '#374151',
            },
            h3: {
              color: '#374151',
            },
            code: {
              color: '#374151',
            },
            strong: {
              color: '#374151',
            },
            blockquote: {
              p: {
                color: '#374151',
              },
            },
          },
        },
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
  },
  plugins: [require('@tailwindcss/typography')],
};
