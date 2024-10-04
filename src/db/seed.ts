import "../services/dotenv";
import bcrypt from "bcrypt";
import { accounts, contacts, Role } from "./schemas";
import { BCRYPT } from "../config/bcrypt";
import { db } from "./db";

const EDAR = {
  id: crypto.randomUUID(),
  email: process.env.ADMIN_EMAIL!,
  password: process.env.ADMIN_PASSWORD!,
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
    { name: "ana", tell: "+57 3028389987", accountId: EDAR.id },
    { name: "luis", tell: "+57 3107654321", accountId: EDAR.id },
    { name: "camila", tell: "+57 3123456789", accountId: EDAR.id },
    { name: "diego", tell: "+57 3176543210", accountId: EDAR.id },
    { name: "sofía", tell: "+57 3009876543", accountId: EDAR.id },
    { name: "felipe", tell: "+57 3141234567", accountId: EDAR.id },
    { name: "isabella", tell: "+57 3132468975", accountId: EDAR.id },
    { name: "julián", tell: "+57 3155678901", accountId: EDAR.id },
    { name: "martina", tell: "+57 3198765432", accountId: EDAR.id },
    { name: "mateo", tell: "+57 3187654321", accountId: EDAR.id },
    { name: "valentina", tell: "+57 3012345678", accountId: EDAR.id },
    { name: "andrés", tell: "+57 3203456789", accountId: EDAR.id },
    { name: "lucía", tell: "+57 3023456789", accountId: EDAR.id },
    { name: "nicolás", tell: "+57 3112345678", accountId: EDAR.id },
    { name: "gabriela", tell: "+57 3089876543", accountId: EDAR.id },
    { name: "juan", tell: "+57 3065432198", accountId: EDAR.id },
    { name: "camilo", tell: "+57 3045678901", accountId: EDAR.id },
    { name: "renata", tell: "+57 3156789012", accountId: EDAR.id },
    { name: "sebastián", tell: "+57 3198765432", accountId: EDAR.id },
    { name: "emilia", tell: "+57 3034567890", accountId: EDAR.id },
    { name: "cristian", tell: "+57 3076543210", accountId: EDAR.id },

    { name: "edar", tell: "+57 3033", accountId: LORE.id },
    { name: "zoila", tell: "+57 3039", accountId: LORE.id },
    { name: "el muo", tell: "+57 3040", accountId: LORE.id },

    { name: "edar", tell: "+57 3033", accountId: MYKE.id },
    { name: "juan", tell: "+57 3034", accountId: MYKE.id },
    { name: "pedro", tell: "+57 3035", accountId: MYKE.id },
  ]);
};

seed().catch(console.error);
