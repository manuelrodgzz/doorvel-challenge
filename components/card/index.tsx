"use client"
import { FC } from "react";
import { Card as MUICard, CardContent } from '@mui/material'
import styled from '@emotion/styled'
import Text from "../Text";

type Props = {
    preText?: string
    text?: string
    postText?: string
}

const StyledCard = styled(MUICard)`
    min-height: 20rem;
    display: flex;
    align-items: center;
`

const Card: FC<Props> = ({preText, text, postText}) => {

    return (
        <StyledCard>
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

export default Card