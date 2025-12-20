import type { ReactNode } from 'react'
import { LayoutHeader } from '../../widgets/LayoutHeader/LayoutHeader'
import { LayoutFooter } from '../../widgets/LayoutFooter/LayoutFooter'

type Props = {
    children: ReactNode
}

export const MainLayout = ({ children }: Props) => {
    return (
        <>
            <LayoutHeader />
            <main>{children}</main>
            <LayoutFooter />
        </>
    )
}
