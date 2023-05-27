"use client"
import { Theme, ThemeContext, ThemedStyleObject } from "@/theme";
import doNotForwardProps from "@/utils/doNotForwardProps";
import styled, { CSSObject } from "@emotion/styled";
import { Typography, TypographyProps } from "@mui/material";
import { FC, useContext } from "react";

const themedStyles: ThemedStyleObject = {
    dark: {
        color: 'white'
    },
    light: {
        color: 'black'
    }
}

type TextColorOverride = Partial<Record<Theme, CSSObject>>

type StyledTypographyProps = { 
    className?: string
    appTheme: Theme
    textColorOverride?: TextColorOverride
} & TypographyProps

type Props = { textColorOverride?: TextColorOverride } & TypographyProps

const StyledTypography = styled(Typography, doNotForwardProps(['appTheme', 'textColorOverride']))<StyledTypographyProps>(({appTheme, textColorOverride, variant}) => ({
    marginBottom: variant === 'h1' ? '4rem' : 'unset',
    ...themedStyles[appTheme],
    ...((textColorOverride && textColorOverride[appTheme]) || {})
}))

const Text: FC<Props> = (props) => {

    const { appTheme } = useContext(ThemeContext)

    return (
        <StyledTypography {...props} appTheme={appTheme}/>
    )
}

export default Text