import "../services/dotenv";
import bcrypt from "bcrypt";
import { accounts, contacts, Role } from "./schemas";
import { BCRYPT } from "../config/bcrypt";
import { db } from "./db";

const EDAR = {
  id: crypto.randomUUID(),
  email: process.env.ADMIN_EMAIL as string,
  password: process.env.ADMIN_PASSWORD as string,
  role: Role.admin,
};

const LORE = {
  id: crypto.randomUUID(),
  email: "lore@gmail.com",
  password: "123456",
};

const MYKE = {
  id: crypto.randomUUID(),
  email: "myke@gmail.com",
  password: "123456",
};

const seed = async () => {
  EDAR.password = await bcrypt.hash(EDAR.password, BCRYPT.salt);
  LORE.password = await bcrypt.hash(LORE.password, BCRYPT.salt);
  MYKE.password = await bcrypt.hash(MYKE.password, BCRYPT.salt);

  await db.delete(accounts).execute();
  await db.insert(accounts).values([EDAR, LORE, MYKE]);

  await db.insert(contacts).values([
    { name: "lore", tell: "+57 3022", accountId: EDAR.id },
    { name: "myke", tell: "+57 3021", accountId: EDAR.id },
    { name: "edar", tell: "+57 3033", accountId: LORE.id },
    { name: "edar", tell: "+57 3033", accountId: MYKE.id },
  ]);
};

seed().catch(console.error);
