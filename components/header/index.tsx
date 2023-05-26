"use client"
import { FC } from 'react'
import NextLink from 'next/link'
import { AppBar, Typography, Box, Button } from "@mui/material";

export type NavItem = {
    url: string
    name: string
}

type Props = {
    pages: NavItem[]
}


const Header: FC<Props> = ({ pages }) => {

    return (
        <AppBar sx={{flexDirection: 'row', justifyContent: 'space-between', position: 'relative'}}>
            <Typography variant='h3'>
                Catálogo de amenidades
            </Typography>

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
        </AppBar>
    )
}

export default Header