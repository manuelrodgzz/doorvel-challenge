import { AmenitiesChildsResponse, AmenitiesParentsResponse, AmenityChild, AmenityParent } from "@/types"

class AmenitiesService <U>{
    private baseUrl: string

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    protected fetchData<V>(urlPath?: string) {
        const url = `${this.baseUrl}${ urlPath }/?format=json`
        return fetch(url).then<V>(res => res.json())
    }

    getAmenityById(id: string): Promise<U>{
        return this.fetchData<U>(`/${id}`)
    }

}

export class AmenitiesParentsService extends AmenitiesService<AmenityParent> {
    constructor() {
        super('http://54.215.118.180:81/api/cat-amenities-parents')
    }

    async getAllAmenities(): Promise<AmenityParent[]> {
        const response = await this.fetchData<AmenitiesParentsResponse>()
        return response.data
    }
}

export class AmenitiesChildsService extends AmenitiesService<AmenityChild> {
    constructor() {
        super('http://54.215.118.180:81/api/cat-amenities-childs')
    }

    async getAllAmenities(): Promise<AmenityChild[]> {
        const allAmenities: AmenityChild[] = []

        let response = await this.fetchData<AmenitiesChildsResponse>()
        allAmenities.concat(response.results)

        while (response.next) {
            response = await this.fetchData<AmenitiesChildsResponse>()
            allAmenities.concat(response.results)
        }

        return allAmenities
    }

    async getAmenitiesByParentId(amenityParentId: number) {
        const amenities = await this.getAllAmenities()
        
        return amenities.filter(amenity => amenity.amenity_parent === amenityParentId)
    }
}