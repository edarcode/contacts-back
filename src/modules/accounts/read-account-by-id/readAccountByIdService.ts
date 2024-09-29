import { UUID } from "crypto";
import { db } from "../../../db/db";
import { accounts } from "../../../db/schemas";
import { eq } from "drizzle-orm";

export const readAccountByIdService = async (id: UUID) => {
  const [account] = await db
    .select()
    .from(accounts)
    .where(eq(accounts.id, id))
    .limit(1);

  return account;
};
