const sharedConfig = require("@ling-design/config/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    ...sharedConfig.content,
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...sharedConfig.theme,
    extend: {
      ...sharedConfig.theme?.extend,
      colors: {
        ...sharedConfig.theme?.extend?.colors,
        ling: {
          blue: {
            DEFAULT: '#4285F4',
            60: 'rgba(66, 133, 244, 0.6)',
            40: 'rgba(66, 133, 244, 0.4)',
            20: 'rgba(66, 133, 244, 0.2)',
            10: 'rgba(66, 133, 244, 0.1)',
          },
          red: {
            DEFAULT: '#FF5219',
            60: 'rgba(255, 82, 25, 0.6)',
            40: 'rgba(255, 82, 25, 0.4)',
            20: 'rgba(255, 82, 25, 0.2)',
            10: 'rgba(255, 82, 25, 0.1)',
          },
          green: {
            DEFAULT: '#00B042',
            60: 'rgba(0, 176, 66, 0.6)',
            40: 'rgba(0, 176, 66, 0.4)',
            20: 'rgba(0, 176, 66, 0.2)',
            10: 'rgba(0, 176, 66, 0.1)',
          },
          yellow: {
            DEFAULT: '#FF9200',
            60: 'rgba(255, 146, 0, 0.6)',
            40: 'rgba(255, 146, 0, 0.4)',
            20: 'rgba(255, 146, 0, 0.2)',
            10: 'rgba(255, 146, 0, 0.1)',
          },
          white: '#FFFFFF',
          black: {
            DEFAULT: '#000000',
            60: 'rgba(0, 0, 0, 0.6)',
            40: 'rgba(0, 0, 0, 0.4)',
            20: 'rgba(0, 0, 0, 0.2)',
            10: 'rgba(0, 0, 0, 0.1)',
          },
          gray: {
            333: '#333333',
            666: '#666666',
            999: '#999999',
            C3: '#C3C3C3',
            f0: '#F0F0F0',
            f8: '#F8F8F8',
            ddd: '#DDDDDD',
            eee: '#EEEEEE',
          }
        }
      },
      spacing: {
        ...sharedConfig.theme?.extend?.spacing,
        'ling-small': '4px',
        'ling-std': '8px',
        'ling-large': '16px',
        'ling-xl': '32px',
      },
      borderRadius: {
        ...sharedConfig.theme?.extend?.borderRadius,
        'ling-small': '2px',
        'ling-medium': '4px',
        'ling-std': '6px',
        'ling-large': '8px',
      },
      fontSize: {
        ...sharedConfig.theme?.extend?.fontSize,
        'ling-tag': ['12px', '1.5'],
        'ling-body': ['14px', '1.5'],
        'ling-h4': ['16px', '1.5'],
        'ling-h3': ['18px', '1.5'],
        'ling-h2': ['24px', '1.5'],
        'ling-h1': ['32px', '1.5'],
      }
    }
  }
}
