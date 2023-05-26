"use client"
import { FC, ReactNode, useContext } from 'react'
import NextLink from 'next/link'
import { AppBar, Box, Button, Switch } from "@mui/material";
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Text from '../Text';
import { Theme, ThemeContext } from '@/theme';

export type NavItem = {
    url: string
    name: string
}

type Props = {
    pages: NavItem[]
}

type NavbarProps = {
    children: ReactNode
    theme: Theme
    className?: string
}

const Navbar: FC<NavbarProps> = ({children, theme, className}) => {

    return (
        <AppBar className={className}>
            {children}
        </AppBar>
    )
}

const StyledNavbar = styled(Navbar)(props => css`
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    background-color: ${props.theme.background};
`)

const Header: FC<Props> = ({ pages }) => {

    const { themeBoolean, toggleTheme, theme } = useContext(ThemeContext)

    return (
        <StyledNavbar theme={theme}>
            <Text variant='h3'>
                Catálogo de amenidades
            </Text>

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