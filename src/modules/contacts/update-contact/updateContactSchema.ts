import { z } from "zod";
import { nameSchema } from "../../../zod-schemas/nameSchema";
import { imgSchema } from "../../../zod-schemas/imgSchema";
import { tellSchema } from "../../../zod-schemas/tellSchema";

export const updateContactSchema = z
  .object({
    name: nameSchema,
    img: imgSchema,
    tell: tellSchema,
  })
  .partial()
  .strict()
  .refine((data) => Object.keys(data).length > 0, {
    message:
      "Mani, ¿para qué pides actualizar si no envías nada para actualizar?",
  });
