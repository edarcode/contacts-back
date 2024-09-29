import { relations } from "drizzle-orm/relations";
import { accounts, contacts } from "./schemas";

export const contactsRelations = relations(contacts, ({ one }) => ({
  account: one(accounts, {
    fields: [contacts.accountId],
    references: [accounts.id],
  }),
}));

export const accountsRelations = relations(accounts, ({ many }) => ({
  contacts: many(contacts),
}));
