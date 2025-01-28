export interface INavbarLink {
  icon?: React.ReactNode
  label: string
  childrens?: Omit<INavbarLink, 'childrens'>[] | null
  href?: string | null
  isLocked?: boolean
}

export interface INavbarProps {
  links: INavbarLink[]
}

export interface INavbarBottomItemBase {
  icon: React.ReactNode
  onClick?: () => void
}

export interface INavbarBottomLinkItem extends INavbarBottomItemBase {
  type: 'link'
  href: string
}

export interface INavbarBottomButtonItem extends INavbarBottomItemBase {
  type: 'button'
}

export type INavbarBottomItem = INavbarBottomLinkItem | INavbarBottomButtonItem

export interface INavbarBottomProps {
  items?: INavbarBottomItem[]
  links: INavbarLink[]
}
