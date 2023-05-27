"use client"
import { FC, ReactNode, useContext } from 'react'
import NextLink from 'next/link'
import { AppBar, Box, Button, Switch } from "@mui/material";
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme, ThemeContext, ThemedStyleObject } from '@/theme';

export type NavItem = {
    url: string
    name: string
}

type Props = {
    pages: NavItem[]
}

type NavbarProps = {
    children: ReactNode
    appTheme: Theme
    className?: string
}

const Navbar: FC<NavbarProps> = ({children, className}) => {

    return (
        <AppBar className={className}>
            {children}
        </AppBar>
    )
}

const themedStyles: ThemedStyleObject = {
    dark: {
        backgroundColor: 'black',
    },
    light: {
        backgroundColor: '#1976d2'
    }
}

const StyledNavbar = styled(Navbar)(props => css`
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    
    a {
        text-decoration: none;
        color: white;
    }

    ${css(themedStyles[props.appTheme])}
`)

const Header: FC<Props> = ({ pages }) => {

    const { themeBoolean, toggleTheme, appTheme } = useContext(ThemeContext)

    return (
        <StyledNavbar appTheme={appTheme}>
            <Box alignItems='center' display='flex'>
                {
                    pages.map((page, i) => (
                        <Button
                            key={ `${i}-${page.name}` }
                            sx={{color: 'white'}}
                        >
                            <NextLink href={page.url}>
                                { page.name }
                            </NextLink>
                        </Button>
                    ))
                }
            </Box>

            <Box>
                <Switch checked={ themeBoolean } onChange={() => toggleTheme()} />
            </Box>
        </StyledNavbar>
    )
}

export default Header