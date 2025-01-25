import { Madimi_One, Outfit } from 'next/font/google'

const fontPrimary = Outfit({ subsets: ['latin'], variable: '--font-primary' })
const fontSecondary = Madimi_One({ subsets: ['latin'], variable: '--font-secondary', weight: ['400'] })

export const getFontsVariables = () => {
  return `${fontPrimary.variable} ${fontSecondary.variable}`
}
