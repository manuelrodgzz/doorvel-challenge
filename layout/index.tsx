import Footer from '@/components/footer'
import Header, { NavItem } from '@/components/header'
import { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const Layout: FC<Props> = ({children}) => {

    const pages: NavItem[] = [
        {
            url: '/amenity-parent/2',
            name: 'Impacto Ambiental'
        },
        {
            url: '/amenity-parent/1',
            name: 'Estilo de vida'
        }
    ]

    return (
        <>
            <Header pages={pages} />
            <main>
                { children }
            </main>
            <Footer />
        </>
    )
}

export default Layout