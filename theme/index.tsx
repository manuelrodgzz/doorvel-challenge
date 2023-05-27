"use client"

import { CSSObject } from '@emotion/react'
import { FC, ReactNode, createContext, useMemo, useState } from 'react'

export type Theme = 'light' | 'dark'

export type ThemedStyleObject = Partial<Record<Theme, CSSObject>>

type ThemeContextValue = {
    themeBoolean: boolean
    appTheme: Theme,
    toggleTheme: () => void
}

type Props = {
    children: ReactNode
}

export const ThemeContext = createContext<ThemeContextValue>({
    themeBoolean: false,
    appTheme: 'light',
    toggleTheme: () => {}
})


export const ThemeProvider: FC<Props> = ({children}) => {

    const [themeBoolean, setThemeBoolean] = useState(false)

    const toggleTheme = () => {
        setThemeBoolean(current => !current )
    }

    const value = useMemo<ThemeContextValue>(() => ({
        themeBoolean,
        appTheme: themeBoolean ? 'dark' : 'light',
        toggleTheme
    }), [themeBoolean])

    return (
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    )
}