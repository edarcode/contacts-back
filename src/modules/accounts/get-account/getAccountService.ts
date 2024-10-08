import { count, eq } from "drizzle-orm";
import { db } from "../../../db/db";
import { UUID } from "crypto";
import { EdarErr } from "../../../errors/EdarErr";
import { accounts, contacts } from "../../../db/schemas";

export const getAccountService = async (id: UUID) => {
  const [account] = await db
    .select({
      id: accounts.id,
      name: accounts.name,
      email: accounts.email,
      role: accounts.role,
      img: accounts.img,
      createdAt: accounts.createdAt,
      contactCount: count(contacts.id),
    })
    .from(accounts)
    .leftJoin(contacts, eq(accounts.id, contacts.accountId))
    .where(eq(accounts.id, id))
    .limit(1);

  if (!account || !account.id)
    throw new EdarErr({ status: 404, msg: "Cuenta no encontrada" });

  return account;
};
