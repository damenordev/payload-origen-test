import Link from 'next/link'

import { AppHeader } from '@/payload-types'
import { Button, TButtonVariant } from '@/ui'
import { getCachedGlobal } from '@/utils'

export const Header = async () => {
  const appHeader: AppHeader = await getCachedGlobal('app-header', 1)()

  const navItems = appHeader?.navItems || []
  const navActions = appHeader?.navActions || []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logo: any = appHeader?.logo || null

  return (
    <header className="w-full">
      <div className="flex items-center justify-center gap-4">
        <div>
          {logo && (
            <img
              className="h-14"
              src={logo?.url}
              alt={logo?.alt}
            />
          )}
        </div>
        <nav className="flex items-center gap-2">
          {navItems.map(item => {
            console.log({ item })
            return (
              <Link
                className="text-sm"
                key={item.id}
                href={item.label || ''}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          {navActions.map(action => (
            <Button
              key={action.label}
              size="sm"
              variant={action.variant as TButtonVariant}
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  )
}
