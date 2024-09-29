import { z } from "zod";
import { createAccountSchema } from "./createAccountSchema";
import { db } from "../../../db/db";
import bcrypt from "bcrypt";
import { BCRYPT } from "../../../config/bcrypt";
import { accounts } from "../../../db/schemas";

export const createAccountService = async (newUser: Account) => {
  await db.insert(accounts).values({
    ...newUser,
    password: await bcrypt.hash(newUser.password, BCRYPT.salt),
  });
};

type Account = z.infer<typeof createAccountSchema>;
