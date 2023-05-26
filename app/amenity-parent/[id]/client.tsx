"use client"
import { FC } from "react"
import { Typography } from '@mui/material'
import { AmenityChild, AmenityParent } from "@/types"

type Props = {
    amenity: AmenityParent,
    childAmenities: AmenityChild[]
}

const AmenityParentPageClient: FC<Props> = ({amenity, childAmenities}) => {
    return (
        <>
            <Typography variant='h1'>{amenity.name}</Typography>
                <ul>
                    {
                        childAmenities.map(child => (
                            <li key={child.id}>{child.name}</li>
                        ))
                    }
                </ul>
        </>
    )
}

export default AmenityParentPageClient