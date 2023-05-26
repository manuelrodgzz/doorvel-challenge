'use client'
import Footer from '@/components/footer'
import Header, { NavItem } from '@/components/header'
import { Theme, ThemeContext } from '@/theme'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FC, ReactNode, useContext } from 'react'

type Props = {
    children: ReactNode
}

type BodyProps = {
    children: ReactNode
    theme: Theme
    className?: string
}

const Body: FC<BodyProps> = ({children, className}) => (<body className={className}>
    {children}
</body>)

const StyledBody = styled(Body)(props => css`
    background-color: ${props.theme.background};
`)

/** It is not possible to import server components from client components BUT it its possible to pass server components
 * to client components throughs props. This Layout is a client component but will receive a server component throught
 * the children prop*/
const Layout: FC<Props> = ({children}) => {
    const { theme } = useContext(ThemeContext)

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
        <StyledBody theme={theme}>
            <Header pages={pages} />
            <main>
                { children }
            </main>
            <Footer />
        </StyledBody>
    )
}

export default Layout