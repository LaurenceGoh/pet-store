import { eq } from "drizzle-orm";
import { db } from "..";
import { InsertPets, SelectPets, petsTable } from "../schema";

export const createPet = async (pet: InsertPets) => {
  return await db.insert(petsTable).values(pet).returning({id : petsTable.id})
};

export const getAllPets = async (): Promise<Array<SelectPets>> => {
  return await db.select().from(petsTable);
};

export const getPetById = async (
  id: SelectPets["id"]
): Promise<Array<SelectPets>> => {
  return await db.select().from(petsTable).where(eq(petsTable.id, id));
};

export const updatePet = async (
  id: SelectPets["id"],
  pet: Partial<Omit<SelectPets, "id">>
) => {

  return await db.update(petsTable).set(pet).where(eq(petsTable.id, id)).returning({id : petsTable.id});
};

export const deletePet = async (id: SelectPets["id"]) => {
  return await db.delete(petsTable).where(eq(petsTable.id, id)).returning({id : petsTable.id});
};

export const getPetsByType = async (type : SelectPets['type']) => {
  return await db.select().from(petsTable).where(eq(petsTable.type, type))
}
