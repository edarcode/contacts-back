import { z } from "zod";
import { db } from "../../../db/db";
import { accounts } from "../../../db/schemas";
import { eq } from "drizzle-orm";
import { UUID } from "crypto";
import { EdarErr } from "../../../errors/EdarErr";
import { updateAccountSchema } from "./updateAccountSchema";
import { BCRYPT } from "../../../config/bcrypt";
import bcrypt from "bcrypt";

export const updateAccountService = async (accountId: UUID, colums: Colums) => {
  const newColums = { ...colums };
  const isImgStringEmpty = newColums.img === "";

  if (newColums.password) {
    newColums.password = await bcrypt.hash(newColums.password, BCRYPT.salt);
  }

  const result = await db
    .update(accounts)
    .set({ ...newColums, img: isImgStringEmpty ? null : newColums.img })
    .where(eq(accounts.id, accountId));

  if (!result.rowsAffected)
    throw new EdarErr({ status: 404, msg: "Registro no encontrado" });
};

type Colums = z.infer<typeof updateAccountSchema>;
