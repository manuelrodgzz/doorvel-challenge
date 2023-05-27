"use client"
import { Theme, ThemeContext, ThemedStyleObject } from '@/theme'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ComponentPropsWithRef, useContext } from 'react'
import Text from '../Text'

type StyledFooterProps = {
    appTheme: Theme
} & ComponentPropsWithRef<'footer'>

const themedStyles: ThemedStyleObject = {
    dark: {
        backgroundColor: 'black',
    },
    light: {
        backgroundColor: '#1976d2'
    }
}

const StyledFooter = styled.footer<StyledFooterProps>( props => css`
    min-height: 5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 1;
    ${themedStyles[props.appTheme]}
`)

const Footer = () => {
    const { appTheme } = useContext(ThemeContext)

    return (
        <StyledFooter appTheme={appTheme}>
            <Text
                textColorOverride={{light: {color: 'white'}}}
            >
                Manuel Rodríguez. {new Date().getFullYear()}
            </Text>
        </StyledFooter>
    )
}

export default Footer