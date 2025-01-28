import { ArrowRight, Lock } from 'lucide-react'
import Link from 'next/link'
import { cva } from 'class-variance-authority'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/ui'

import type { INavbarLink, INavbarProps } from './Navbar.types'

const navbarLinkVariants = cva('w-full flex items-end gap-2 p-2 rounded-xl transition duration-300 group', {
  variants: {
    isLocked: {
      true: 'hover:bg-destructive hover:text-destructive-foreground',
      false: 'hover:bg-primary hover:text-primary-foreground active:scale-[0.98]',
    },
  },
})

const NavbarLinkContent: React.FC<INavbarLink> = ({ icon, label }) => {
  return (
    <>
      <span>{icon}</span>
      <span className="flex-1 text-lg leading-none truncate text-left">{label}</span>
    </>
  )
}

export const NavbarLinkLocked: React.FC<INavbarLink> = ({ icon, label, isLocked }) => {
  return (
    <button className={navbarLinkVariants({ isLocked })}>
      <NavbarLinkContent
        icon={icon}
        label={label}
      />
      {isLocked && (
        <Lock
          className="mr-0.5 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 text-transparent group-hover:text-destructive-foreground transition duration-500"
          size={16}
        />
      )}
    </button>
  )
}

export const NavbarLink: React.FC<INavbarLink> = link => {
  if (link.isLocked || !link.href) return <NavbarLinkLocked {...link} />
  return (
    <Link
      href={link.href}
      className={navbarLinkVariants({ isLocked: !!link.isLocked })}
    >
      <NavbarLinkContent {...link} />
      <ArrowRight
        className="opacity-0 text-transparent -translate-x-3 group-hover:-translate-x-0 group-hover:text-primary-foreground group-hover:opacity-100 transition duration-500"
        size={16}
      />
    </Link>
  )
}

export const NavbarLinksWithChildren: React.FC<INavbarLink> = ({ childrens, icon, label, isLocked }) => {
  return (
    <Accordion
      type="single"
      collapsible
      key={label}
      className="w-full"
    >
      <AccordionItem
        value="item-1"
        className="border-b-0"
      >
        <AccordionTrigger
          className={navbarLinkVariants({
            isLocked: !!isLocked,
            className: 'hover:no-underline hover:bg-primary hover:text-primary-foreground active:scale-[0.98]',
          })}
        >
          <NavbarLinkContent
            icon={icon}
            label={label}
          />
        </AccordionTrigger>
        <AccordionContent className="pl-4 pt-1 pb-0 space-y-1">
          {childrens?.map(link => (
            <NavbarLink
              key={link.label}
              {...link}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export const NavbarLinks: React.FC<INavbarProps> = ({ links }) => {
  return (
    <div className="flex-1 flex flex-col gap-1 w-full py-3 md:py-6">
      {links.map((link, index) => {
        if (link.childrens)
          return (
            <NavbarLinksWithChildren
              key={index}
              {...link}
            />
          )
        return (
          <NavbarLink
            key={index}
            {...link}
          />
        )
      })}
    </div>
  )
}
