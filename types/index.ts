export type AmenityParent = {
    id: number
    property_category_id: number
    name: string
    seo_friendly: string
    active_record: true,
    created_at: string
    updated_at: string
    created_by: string
}

export type AmenitiesParentsResponse = {
    data: AmenityParent[]
    date_recived: {}
}

export type AmenityChild = {
    id: number
    name: string
    seo_friendly: string
    property_category: number
    amenity_parent: number
}

export type AmenitiesChildsResponse = {
    count: number
    next: string | null
    previous: string | null
    results: AmenityChild[]
}