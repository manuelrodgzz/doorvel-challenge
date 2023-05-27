import { useState, useMemo, ReactNode, FC, useContext } from "react";
import { Box, Pagination as MUIPagination, Grid, PaginationProps } from "@mui/material";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Text from "../Text";
import { Theme, ThemeContext, ThemedStyleObject } from "@/theme";

type Props<T> = {
    items: T[]
    listUniqueId: string
    itemsPerPage: number
    noResultsMessage: string
    render: (item: T) => ReactNode
}

const PagesWrapper = styled(Box)`
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const themedStyles: ThemedStyleObject = {
    dark: {
        button: {
            backgroundColor: 'white',
            ':hover': {
                backgroundColor: '#c9c9c9'
            },
            ':disabled': {
                backgroundColor: '#FFFFFF',
                color: '#d5d5d5',
                opacity: 1
            }
        },
        div: {
            backgroundColor: 'white'
        }
    }
}

type CustomPaginationProps = {
    className?: string
    appTheme: Theme
} & PaginationProps

const CustomPagination: FC<CustomPaginationProps> = ({appTheme, ...props}) => <MUIPagination {...props}/>

const Pagination = styled(CustomPagination)(props => css`
    padding-top: 2rem;

    ${css(themedStyles[props.appTheme])}
`)

const Pages = <T extends unknown>({items, listUniqueId, itemsPerPage, noResultsMessage, render}: Props<T>) => {
    const { appTheme } = useContext(ThemeContext)
    const [activePage, setActivePage] = useState(1)
    const pages = useMemo<Array<T[]>>(() => {
        const _pages: Array<T[]> = []
        let currentPageIndex = 0

        for (const item of items) {
            const currentPage = _pages[currentPageIndex]

            // If it is the first item of the first page
            if (currentPageIndex === 0 && !currentPage) {
                _pages[currentPageIndex] = [item]
                continue
            }

            // If current page is not full yet
            if (currentPage.length < itemsPerPage) {
                currentPage.push(item)
                continue
            }

            // Current page is already full
            currentPageIndex++
            _pages[currentPageIndex] = [item]
        }

        return _pages
    },[])

    return (
        <PagesWrapper>
            <Box>
                {
                    <Grid container spacing={2}>
                        {
                            pages[activePage]?.map((item, i) => {
                                const key = `${ listUniqueId }-${i}`
                                return (
                                    <Grid key={key} item xs={12} lg={4}>
                                        {render(item)}
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                }

                {
                    (!pages.length || !pages[0].length) && (
                        <Text variant="h5">{noResultsMessage}</Text>
                    )
                }
            </Box>

            <Pagination
                appTheme={appTheme}
                page={activePage}
                count={ pages[activePage] ? itemsPerPage : 0}
                onChange={(e, newPage) => setActivePage(newPage)}
                color='primary'
            />
        </PagesWrapper>
    )
}

export default Pages