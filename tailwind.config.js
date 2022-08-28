/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      heroDark: "url('/images/gauravkhurana-dark.jpg')",
      heroLight: "url('/images/gauravkhurana-light.jpg')",
      notFoundLight: "url('/images/notfound-light.jpg')"
    },
    fontSize: {
      xs: [
        '.75rem',
        {
          lineHeight: '0.15',
          letterSpacing: '-0.01em'
        }
      ],
      sm: [
        '.875rem',
        {
          lineHeight: '0.15',
          letterSpacing: '-0.01em'
        }
      ],
      tiny: [
        '.875rem',
        {
          lineHeight: '0.25',
          letterSpacing: '-0.01em'
        }
      ],
      base: [
        '1rem',
        {
          lineHeight: '0.25',
          letterSpacing: '-0.01em'
        }
      ],
      lg: [
        '1.125rem',
        {
          lineHeight: '0.5',
          letterSpacing: '0.01em'
        }
      ],
      xl: [
        '1.25rem',
        {
          lineHeight: '0.25',
          letterSpacing: '0.01em'
        }
      ],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '0.75',
          letterSpacing: '0.01em'
        }
      ],
      '3xl': [
        '1.875rem',
        {
          lineHeight: '0.85',
          letterSpacing: '0.01em'
        }
      ],
      '4xl': [
        '2.25rem',
        {
          lineHeight: '1',
          letterSpacing: '0.02em'
        }
      ],
      '5xl': [
        '3rem',
        {
          lineHeight: '1.25',
          letterSpacing: '0.03em'
        }
      ],
      '6xl': [
        '4rem',
        {
          lineHeight: '1.5',
          letterSpacing: '0.03em'
        }
      ],
      '7xl': [
        '5rem',
        {
          lineHeight: '1.75',
          letterSpacing: '0.04em'
        }
      ]
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a'
      },
      spacing: {
        meas0: '0',
        meas1: '0.125rem',
        meas2: '0.25rem',
        meas3: '0.375rem',
        meas2: '0.5rem',
        meas4: '0.625rem',
        meas5: '0.75rem',
        meas6: '0.875rem',
        meas7: '1rem',
        meas8: '1.25rem',
        meas9: '1.5rem',
        meas10: '1.75rem',
        meas11: '2rem',
        meas12: '2.25rem',
        meas13: '2.5rem',
        meas14: '2.75rem',
        meas15: '3rem',
        meas16: '3.5rem',
        meas17: '4rem',
        meas18: '5rem',
        meas19: '6rem',
        meas20: '7rem',
        meas21: '8rem',
        meas22: '9rem',
        meas23: '10rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
};
