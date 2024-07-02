import React from 'react'
import DataTableDemo from '@/components/ex-table'
import { accessoriesColumns } from '../(admin)/admin/columns';
import { DataTable } from '../(admin)/admin/data-table';
const page = async () => {

    const accessories = await fetch("http://localhost:3000/api/accessories", {
        next: {
          revalidate: 0,
        },
      }).then((res) => res.json());
  return (
    <div>
      <DataTableDemo/>

      <DataTable columns={accessoriesColumns} data={accessories} />

      
    </div>
    
  )
}

export default page
