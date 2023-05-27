'use client'
import Footer from '@/components/footer'
import Header, { NavItem } from '@/components/header'
import { Theme, ThemeContext, ThemedStyleObject } from '@/theme'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import { FC, ReactNode, useContext } from 'react'

type Props = {
    children: ReactNode
}

type BodyProps = {
    children: ReactNode
    appTheme: Theme
    className?: string
}

const Body: FC<BodyProps> = ({children, className}) => (<body className={className}>
    {children}
</body>)

const themedStyles: ThemedStyleObject = {
    dark: {
        backgroundColor: '#242424'
    },
    light: {
        backgroundColor: 'light'
    }
}

const StyledBody = styled(Body)(props => (themedStyles[props.appTheme]))

/** It is not possible to import server components from client components BUT it its possible to pass server components
 * to client components throughs props. This Layout is a client component but will receive a server component throught
 * the children prop*/
const Layout: FC<Props> = ({children}) => {
    const { appTheme } = useContext(ThemeContext)

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
        <StyledBody appTheme={appTheme}>
            <Header pages={pages}/>
            <main>
                <Container>
                    { children }
                </Container>
            </main>
            <Footer />
        </StyledBody>
    )
}

export default Layout