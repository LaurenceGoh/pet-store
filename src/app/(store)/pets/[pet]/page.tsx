import React from 'react'
import type { Metadata } from 'next'

type Props = {
  params : {pet: string}
  searchParams : {[key : string] : string | string[] | undefined} 
}
export const generateMetadata = async ( {params} : Props,
) : Promise<Metadata> => {
  const accessory = params.pet;
  return {
    title : accessory,
    description : `Accessory Details for ${accessory}`,
  }
}

const page = ( { params }: Props) => {
return (
  <div>
   Clicked on {params.pet}
  </div>
)
}

export default page
