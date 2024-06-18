import React from 'react'
interface PetSlugProps {
    pet : string
}
const Page = ({params} : {params : PetSlugProps}) =>{
  return (
    <div>
     Pet name : {params.pet}
    </div>
  )
}

export default Page