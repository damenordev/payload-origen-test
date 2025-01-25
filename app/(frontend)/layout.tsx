import { ILayout } from '@/types'
import { cn, getFontsVariables } from '@/styles'

import '@/styles/globals.css'
import { Header } from '@/components'

export default async function RootLayout({ children }: ILayout) {
  return (
    <html className="w-full overflow-x-hidden">
      <body className={cn('relative min-h-screen w-full bg-background text-foreground overflow-x-hidden', getFontsVariables())}>
        <Header />
        <>{children}</>
      </body>
    </html>
  )
}
