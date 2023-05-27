"use client"
import { Theme, ThemeContext, ThemedStyleObject } from "@/theme";
import styled from "@emotion/styled";
import { Typography as MUITypography, TypographyProps } from "@mui/material";
import { FC, useContext } from "react";

const themedStyles: ThemedStyleObject = {
    dark: {
        color: 'white'
    },
    light: {
        color: 'black'
    }
}

type CustomTypographyProps = { 
    className?: string
    appTheme: Theme
} & TypographyProps

const Typography: FC<CustomTypographyProps> = ({appTheme, ...props}) => (
    <MUITypography {...props}>

    </MUITypography>
)

const StyledTypography = styled(Typography)(props => themedStyles[props.appTheme])

const Text: FC<TypographyProps> = (props) => {

    const { appTheme } = useContext(ThemeContext)

    return (
        <StyledTypography {...props} appTheme={appTheme}/>
    )
}

export default Text