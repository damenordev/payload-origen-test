import { ILayout } from '@/types'
import { cn, getFontsVariables } from '@/styles'

import '@/styles/globals.css'
import { Header } from '@/components'

export default async function RootLayout({ children }: ILayout) {
  return (
    <html>
      <body className={cn('', getFontsVariables())}>
        <Header />
        <>{children}</>
      </body>
    </html>
  )
}
