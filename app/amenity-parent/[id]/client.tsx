"use client"
import { FC } from "react"
import { AmenityChild, AmenityParent } from "@/types"
import Card from "@/components/card"
import Pages from "@/components/pages"
import Text from "@/components/Text"

type Props = {
    amenity: AmenityParent,
    childAmenities: AmenityChild[]
}

const AmenityParentPageClient: FC<Props> = ({amenity, childAmenities}) => {

    return (
        <>
            <Text variant='h1' mb={8}>{amenity.name}</Text>

            <Pages<AmenityChild>
                items={childAmenities}
                listUniqueId='amenity-child'
                itemsPerPage={9}
                noResultsMessage="No amenity children found for this category 😯"
                render={
                    (amenity) => (
                        <Card
                            preText={`ID: ${String(amenity.id)}`}
                            text={amenity.name}
                            postText={`Seo Friendly: ${amenity.seo_friendly}`}
                        />
                    )
                }
            />
        </>
    )
}

export default AmenityParentPageClient