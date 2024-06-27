"use client";

import { ColumnDef } from "@tanstack/react-table";
import { SelectPets , SelectAccessories } from "@/db/schema";

export const petsColumns: ColumnDef<SelectPets>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey : "age",
    header: "Age",
  },
  {
    accessorKey: "breed",
    header: "Breed",
  },
  {
    accessorKey : "created_at",
    header: "Created At",
  },
  {
    accessorKey : "updated_at",
    header: "Updated At"
  }
];


export const accessoriesColumns: ColumnDef<SelectAccessories>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey : "type",
        header: "Type",
    },
    {
        accessorKey : "created_at",
        header : "Created At"
    },
    {
        accessorKey : "updated_at",
        header : "Updated At"
    }
]
