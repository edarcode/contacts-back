import { UUID } from "crypto";
import { db } from "../../../db/db";
import { contacts } from "../../../db/schemas";
import { and, eq, like } from "drizzle-orm";
import { getContactsSchema } from "./getContactsSchema";
import { z } from "zod";
import { EdarErr } from "../../../errors/EdarErr";

export const getContactsService = async (
  accountId: UUID,
  filters: Filters = {}
) => {
  if (filters.page && filters.page <= 0) throw new EdarErr(ERR_MSG);

  const { page = 1, limit = 6, name, tell } = filters;
  const offset = (page - 1) * limit;

  const conditions = [
    eq(contacts.accountId, accountId),
    name ? like(contacts.name, `%${name}%`) : undefined,
    tell ? like(contacts.tell, `%${tell}%`) : undefined,
  ].filter(Boolean);

  const totalRecords = (
    await db.query.contacts.findMany({ where: and(...conditions) })
  ).length;

  const records = await db.query.contacts.findMany({
    where: and(...conditions),
    columns: { id: true, name: true, img: true, tell: true },
    limit,
    offset,
  });

  const totalPages = Math.ceil(totalRecords / limit) || 1;

  if (page > totalPages) throw new EdarErr(ERR_MSG);

  return { page, limit, totalPages, records };
};

type Filters = z.infer<typeof getContactsSchema>;

const ERR_MSG = {
  status: 400,
  msg: "Mani te estás tirando un triple con el page",
};
