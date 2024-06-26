import { db } from "..";
import { eq } from 'drizzle-orm'
import { InsertAccessories, SelectAccessories, accessoriesTable } from "../schema";

export const createAccessory = async (accessory: InsertAccessories) => {
    return await db.insert(accessoriesTable).values(accessory).returning({id : accessoriesTable.id});
}

export const getAllAccessories = async (): Promise<Array<SelectAccessories>> => {
    return await db.select().from(accessoriesTable)
}

export const getAccessoryById = async (id: SelectAccessories['id']): Promise<Array<SelectAccessories>> => {
    return await db.select().from(accessoriesTable).where(eq(accessoriesTable.id, id));
}

export const updateAccessory = async (id: SelectAccessories['id'], accessory: Partial<Omit<SelectAccessories, 'id'>>) => {
    return await db.update(accessoriesTable).set(accessory).where(eq(accessoriesTable.id, id)).returning({id : accessoriesTable.id})
}

export const deleteAccessory = async (id: SelectAccessories['id']) => {
    return await db.delete(accessoriesTable).where(eq(accessoriesTable.id, id)).returning({id : accessoriesTable.id})
}


export const getAccessoriesByType = async (type : SelectAccessories['type']) => {
    return await db.select().from(accessoriesTable).where(eq(accessoriesTable.type, type))
}
