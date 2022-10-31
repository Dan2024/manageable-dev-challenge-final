import type { ReactNode } from 'react'
import { Header } from './Header'

type LayoutProps = { children?: ReactNode }

export const Layout = (props: LayoutProps) => (
  <>
    <Header />
    {props.children}
  </>
)
