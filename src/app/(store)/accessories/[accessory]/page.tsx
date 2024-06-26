import React from 'react'
import type { Metadata } from 'next'
import { SelectAccessories } from '@/db/schema'
import AccessoryCard from '@/components/AccessoryCard'

type Props = {
  params : {accessory: string}
  searchParams : {[key : string] : string | string[] | undefined} 
}

export const generateMetadata = async ( {params} : Props,
  ) : Promise<Metadata> => {
    const accessory = params.accessory;
    return {
      title : accessory,
      description : `Accessory Details for ${accessory}`,
    }
}

const page = async ({ params }: Props) => {
  const accessories : any  = await fetch(
    `http://localhost:3000/api/accessories/${params.accessory}`, {
      next : {
        revalidate : 0
      }
    }
  ).then((res) => res.json());

  return (
    <main className="flex flex-col justify-between items-center">
    <div className="grid grid-cols-4 gap-4">
      {accessories.map((accessory: SelectAccessories) => (
        <AccessoryCard accessory={accessory} key={accessory.id} />
      ))}
    </div>
  </main>
  )
}

export default page
