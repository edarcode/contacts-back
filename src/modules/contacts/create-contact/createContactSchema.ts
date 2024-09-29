import { z } from "zod";
import { nameSchema } from "../../../zod-schemas/nameSchema";
import { imgSchema } from "../../../zod-schemas/imgSchema";
import { tellSchema } from "../../../zod-schemas/tellSchema";

export const createContactSchema = z
  .object({
    name: nameSchema,
    img: imgSchema.optional(),
    tell: tellSchema,
  })
  .strict();
