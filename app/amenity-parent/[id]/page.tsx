import { AmenitiesChildsService, AmenitiesParentsService } from '@/services'
import AmenityParentPageClient from './client'
import { Metadata } from 'next'

type Props = {
    params: {
        id: string
    }
}

/** Components in app router are server components by default. I created a separated client component because
 * Material UI uses hooks under the hood (hooks are not available in server components). This component 
 * will receive the fetched data so that the data is fetched only during the build phase and not client side.
*/

const AmenityParentPageServer = async ({params}: Props) => {
    const parentsService = new AmenitiesParentsService()
    const childService = new AmenitiesChildsService()
    const amenity = await parentsService.getAmenityById(params.id)
    const childAmenities = await childService.getAmenitiesByParentId(amenity.id)
    
    return <AmenityParentPageClient amenity={amenity} childAmenities={childAmenities}/>
}

export const generateStaticParams = async () => {
    const service = new AmenitiesParentsService()
    const amenities = await service.getAllAmenities()

    // Apparently when using app router you can only pass the slug to the page component.
    return amenities.map(amenity => ({
        id: String(amenity.id)
    }))
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const service = new AmenitiesParentsService()
    const amenity = await service.getAmenityById(params.id)
    return {
        title: `Amenidad | ${amenity.name}`
    }
}

// Prevents NextJS from rendering a page that was not generated with generateStaticParams
export const dynamicParams = false

export default AmenityParentPageServer