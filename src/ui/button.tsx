import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/styles'

const buttonVariantGlobal =
  'h-fit inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-md font-bold ring-offset-background transition-transform cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]'

const variant = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
}

const buttonVariants = cva(buttonVariantGlobal, {
  variants: {
    variant,
    size: {
      default: 'px-4 py-2',
      sm: 'text-xs px-3 py-1.5',
      lg: 'text-lg px-5 py-2.5',
    },
    uppercase: { true: 'uppercase' },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
    uppercase: false,
  },
})

const buttonIconVariants = cva(buttonVariantGlobal, {
  variants: {
    variant,
    size: {
      default: 'size-10 [&>svg]:size-6',
      xs: 'size-7 [&>svg]:size-4',
      sm: 'size-8 [&>svg]:size-5',
      lg: 'size-11 [&>svg]:size-7',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export type TButtonVariant = IButtonProps['variant']

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(({ className, variant, size, uppercase, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className, uppercase }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = 'Button'

export interface IButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonIconVariants> {
  asChild?: boolean
}

export const ButtonIcon = React.forwardRef<HTMLButtonElement, IButtonIconProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonIconVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
ButtonIcon.displayName = 'ButtonIcon'
