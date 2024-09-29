import { z } from "zod";
import { nameSchema } from "../../../zod-schemas/nameSchema";
import { tellSchema } from "../../../zod-schemas/tellSchema";
import { pageSchema } from "../../../zod-schemas/pageSchema";
import { limitSchema } from "../../../zod-schemas/limitSchema";

export const getContactsSchema = z
  .object({
    tell: tellSchema,
    name: nameSchema,
    page: pageSchema,
    limit: limitSchema,
  })
  .strict()
  .partial();
