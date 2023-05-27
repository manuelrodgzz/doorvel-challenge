"use client"
import { FC, useContext } from "react";
import { Card as MUICard, CardContent, CardProps } from '@mui/material'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Text from "../Text";
import { Theme, ThemeContext, ThemedStyleObject } from "@/theme";
import doNotForwardProps from "@/utils/doNotForwardProps";

type Props = {
    preText?: string
    text?: string
    postText?: string
}

type CustomCardProps = {
    className?: string
    appTheme: Theme
} & CardProps

const themedStyles: ThemedStyleObject = {
    dark: {
        backgroundColor: '#444444'
    },
}

const StyledCard = styled(MUICard, doNotForwardProps('appTheme'))<CustomCardProps>(props => css`
    min-height: 20rem;
    display: flex;
    align-items: center;
    ${css(themedStyles[props.appTheme])}
`)

const CustomCard: FC<Props> = ({preText, text, postText}) => {

    const { appTheme } = useContext(ThemeContext)

    return (
        <StyledCard appTheme={appTheme}>
            <CardContent>
                {
                    preText && (
                        <Text sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            { preText }
                        </Text>
                    )
                }

                {
                    text && (
                        <Text variant="h5">
                            {text}
                        </Text>
                    )
                }

                {
                    postText && (
                        <Text sx={{ mb: 1.5 }} color="text.secondary">
                            { postText }
                        </Text>
                    )
                }
            </CardContent>
        </StyledCard>
    )
}

export default CustomCard