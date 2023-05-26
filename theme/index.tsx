"use client"

import { FC, ReactNode, createContext, useMemo, useState, useContext } from 'react'

export type Theme = {
    text: string
    background: string
}

type ThemeContextValue = {
    themeBoolean: boolean
    theme: Theme,
    toggleTheme: () => void
}

type Props = {
    children: ReactNode
}

const LIGHT_THEME: Theme = {
    text: 'black',
    background: 'white'
}

const DARK_THEME: Theme = {
    text: 'white',
    background: 'black'
}

export const ThemeContext = createContext<ThemeContextValue>({
    themeBoolean: false,
    theme: LIGHT_THEME,
    toggleTheme: () => {}
})


export const ThemeProvider: FC<Props> = ({children}) => {

    const [themeBoolean ,setThemeBoolean] = useState(false)

    const toggleTheme = () => {
        setThemeBoolean(current => !current )
    }

    const value = useMemo(() => ({
        themeBoolean,
        theme: themeBoolean ? DARK_THEME : LIGHT_THEME,
        toggleTheme
    }), [themeBoolean])

    return (
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    )
}