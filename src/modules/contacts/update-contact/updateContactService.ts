import { z } from "zod";
import { updateContactSchema } from "./updateContactSchema";
import { db } from "../../../db/db";
import { contacts } from "../../../db/schemas";
import { and, eq } from "drizzle-orm";
import { UUID } from "crypto";
import { EdarErr } from "../../../errors/EdarErr";

export const updateContactService = async (
  accountId: UUID,
  contactId: UUID,
  params: Colums
) => {
  const isStringEmpty = params.img === "";

  const result = await db
    .update(contacts)
    .set({ ...params, img: isStringEmpty ? null : params.img })
    .where(and(eq(contacts.accountId, accountId), eq(contacts.id, contactId)));

  if (!result.rowsAffected)
    throw new EdarErr({ status: 404, msg: "Registro no encontrado" });
};

type Colums = z.infer<typeof updateContactSchema>;
