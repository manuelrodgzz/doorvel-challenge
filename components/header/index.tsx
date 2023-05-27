"use client"
import { FC, ReactNode, useContext } from 'react'
import NextLink from 'next/link'
import { AppBar, Box, Button, Switch } from "@mui/material";
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme, ThemeContext, ThemedStyleObject } from '@/theme';
import doNotForwardProps from '@/utils/doNotForwardProps';

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

const themedStyles: ThemedStyleObject = {
    dark: {
        backgroundColor: 'black',
    },
    light: {
        backgroundColor: '#1976d2'
    }
}

const StyledNavbar = styled(AppBar, doNotForwardProps('appTheme'))<NavbarProps>(props => css`
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    min-height: 5rem;
    flex: 0 1;

    @media screen and (min-width: 1025px) {

        padding: 0 5rem;
    }
    
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

            <Box display='flex' alignItems='center'>
                <Switch checked={ themeBoolean } onChange={() => toggleTheme()} />
            </Box>
        </StyledNavbar>
    )
}

export default Header