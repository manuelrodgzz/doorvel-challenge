import { AmenitiesChildsResponse, AmenitiesParentsResponse, AmenityChild, AmenityParent } from "@/types"

type FetchDataArgs = {
    urlPath?: string,
    searchParams?: {}
} | undefined

class AmenitiesService <U>{
    private baseUrl: string

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    protected fetchData<V>({urlPath, searchParams}: FetchDataArgs = {}) {
        const finalSearchParams = {
            ...searchParams,
            format: 'json',
        }
        const url = `${this.baseUrl}${ urlPath || ''}/?${Object.entries(finalSearchParams).map(([param, value]) => `${param}=${value}`).join('&')}`
        return fetch(url).then<V>(res => res.json())
    }

    getAmenityById(id: string): Promise<U>{
        return this.fetchData<U>({
            urlPath: `/${id}`
        })
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

    async getAmenitiesByParentId(amenityParentId: number) {
        let response = await this.fetchData<AmenitiesChildsResponse>({
            searchParams: {
                amenity_parent_id: amenityParentId
            }
        })

        const amenities: AmenityChild[] = response.results

        while (response.next) {
            const searchParamsEntries = new URL(response.next)
                .searchParams
                .toString()
                .split('&')
                .map(param => param.split('='))
                
            const nextSearchParams = Object.fromEntries(searchParamsEntries)
            response = await this.fetchData({
                searchParams: nextSearchParams
            })

            amenities.push(...response.results)
        }

        return amenities
    }
}