'use client'
import Footer from '@/components/footer'
import Header, { NavItem } from '@/components/header'
import { Theme, ThemeContext, ThemedStyleObject } from '@/theme'
import doNotForwardProps from '@/utils/doNotForwardProps'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
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

const themedStyles: ThemedStyleObject = {
    dark: {
        backgroundColor: '#242424'
    },
    light: {
        backgroundColor: 'light'
    }
}

const StyledBody = styled('body', doNotForwardProps('appTheme'))<BodyProps>(props => css`
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;

    main {
        padding: 4rem 0;
        flex: 1 1;
    }

    h1 {
        font-size: 40px !important;
    }

    h2 {
        font-size: 36px !important;
    }

    h3 {
        font-size: 32px !important;
    }

    h4 {
        font-size: 24px !important;
    }

    ${themedStyles[props.appTheme]}
`)

/** It is not possible to import server components from client components BUT it its possible to pass server components
 * to client components through props. This Layout is a client component but will receive a server component through
 * the children prop*/
const Layout: FC<Props> = ({children}) => {
    const { appTheme } = useContext(ThemeContext)

    const pages: NavItem[] = [
        {
            url: '/',
            name: 'Inicio'
        },
        {
            url: '/amenity-parent/1',
            name: 'Estilo de vida'
        },
        {
            url: '/amenity-parent/2',
            name: 'Impacto Ambiental'
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
