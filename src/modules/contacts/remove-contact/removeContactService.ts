import { and, eq } from "drizzle-orm";
import { db } from "../../../db/db";
import { UUID } from "crypto";
import { contacts } from "../../../db/schemas";
import { EdarErr } from "../../../errors/EdarErr";

export const removeContactService = async (
  accountId: UUID,
  contactId: UUID
) => {
  const result = await db
    .delete(contacts)
    .where(and(eq(contacts.accountId, accountId), eq(contacts.id, contactId)));

  if (!result.rowsAffected)
    throw new EdarErr({ status: 404, msg: "Registro no encontrado" });
};
