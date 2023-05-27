"use client"
import { FC, useRef } from "react"
import { AmenityChild, AmenityParent } from "@/types"
import Text from "@/components/Text"
import Table from "@/components/table"
import { GridColDef } from "@mui/x-data-grid"

type Props = {
    amenity: AmenityParent,
    childAmenities: AmenityChild[]
}

const AmenityParentPageClient: FC<Props> = ({amenity, childAmenities}) => {

    const columns = useRef<GridColDef[]>(Object.keys(childAmenities[0] || {}).map(prop => ({
        field: prop,
        headerName: prop,
        width: prop === 'id' ? 10 : 300
    })))

    return (
        <>
            <Text variant='h1'>{amenity.name}</Text>

            <Table columns={columns.current} rows={childAmenities} itemsPerPage={10}/>
        </>
    )
}

export default AmenityParentPageClient