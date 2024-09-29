import { and, eq } from "drizzle-orm";
import { db } from "../../../db/db";
import { UUID } from "crypto";
import { contacts } from "../../../db/schemas";

export const removeContactService = async (
  accountId: UUID,
  contactId: UUID
) => {
  await db
    .delete(contacts)
    .where(and(eq(contacts.accountId, accountId), eq(contacts.id, contactId)));
};
