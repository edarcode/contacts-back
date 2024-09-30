import { eq } from "drizzle-orm";
import { db } from "../../../db/db";
import { UUID } from "crypto";
import { accounts } from "../../../db/schemas";
import { EdarErr } from "../../../errors/EdarErr";

export const removeAccountService = async (id: UUID) => {
  const result = await db.delete(accounts).where(eq(accounts.id, id));

  if (!result.rowsAffected)
    throw new EdarErr({ status: 404, msg: "Registro no encontrado" });
};
