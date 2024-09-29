import { eq } from "drizzle-orm";
import { db } from "../../../db/db";
import { UUID } from "crypto";
import { accounts } from "../../../db/schemas";

export const removeAccountService = async (id: UUID) => {
  await db.delete(accounts).where(eq(accounts.id, id));
};
