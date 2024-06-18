import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const petsTable = pgTable('pets_table',{
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    type: text('type').notNull(),
    age : integer('age').notNull(),
    breed : text('breed').notNull(),
    created_at: timestamp('created_at').notNull().defaultNow(),
    updated_at: timestamp('updated_at').notNull().$onUpdate(()=>new Date()),
});

export const accessoriesTable = pgTable('accessories_table',{
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    type: text('type').notNull(),
    created_at: timestamp('created_at').notNull().defaultNow(),
    updated_at: timestamp('updated_at').notNull().$onUpdate(()=>new Date()),
});

export const usersTable = pgTable('users_table' , {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
});

export type InsertPets = typeof petsTable.$inferInsert;
export type SelectPets = typeof petsTable.$inferSelect;

export type InsertAccessories = typeof accessoriesTable.$inferInsert;
export type SelectAccessories = typeof accessoriesTable.$inferSelect;

export type InsertUsers = typeof usersTable.$inferInsert;
export type SelectUsers = typeof usersTable.$inferSelect;

