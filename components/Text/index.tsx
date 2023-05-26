"use client"
import { ThemeContext } from "@/theme";
import { Typography, TypographyProps } from "@mui/material";
import { FC, useContext } from "react";


const Text: FC<TypographyProps> = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <Typography {...props} color={theme.text}/>
    )
}

export default Text