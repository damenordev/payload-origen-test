// import tailwindcssAnimate from 'tailwindcss-animate'
// import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ['class'],
    content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  // darkMode: ['selector', '[data-theme="dark"]'],
  // plugins: [tailwindcssAnimate, typography],
  // prefix: '',
  // safelist: [
  //   'lg:col-span-4',
  //   'lg:col-span-6',
  //   'lg:col-span-8',
  //   'lg:col-span-12',
  //   'border-border',
  //   'bg-card',
  //   'border-error',
  //   'bg-error/30',
  //   'border-success',
  //   'bg-success/30',
  //   'border-warning',
  //   'bg-warning/30',
  // ],
  theme: {
  	extend: {
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
}

export default config
