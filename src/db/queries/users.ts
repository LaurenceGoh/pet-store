import { db } from "..";
import { eq } from 'drizzle-orm'
import { InsertUsers, SelectUsers, usersTable } from "../schema";

export const createUser = async (user: InsertUsers) => {
    return await db.insert(usersTable).values(user);
}

export const getAllUsers = async (): Promise<Array<SelectUsers>> => {
    return await db.select().from(usersTable)
}

export const getUserById = async (id : SelectUsers['id']) : Promise<Array<SelectUsers>> => {
    return await db.select().from(usersTable).where(eq(usersTable.id , id));
}

export const updateUser = async (id : SelectUsers['id'], user: Partial<Omit<SelectUsers,'id'>>) => {
    return await db.update(usersTable).set(user).where(eq(usersTable.id, id))
}

export const deleteUser = async (id : SelectUsers['id']) => {
    return await db.delete(usersTable).where(eq(usersTable.id, id))
}


