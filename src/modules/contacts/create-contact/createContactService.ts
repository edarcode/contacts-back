import { z } from "zod";
import { createContactSchema } from "./createContactSchema";
import { db } from "../../../db/db";
import { contacts } from "../../../db/schemas";
import { UUID } from "crypto";

export const createContactService = async (
  id: UUID,
  newContact: NewContact
) => {
  await db.insert(contacts).values({ ...newContact, accountId: id });
};

type NewContact = z.infer<typeof createContactSchema>;
