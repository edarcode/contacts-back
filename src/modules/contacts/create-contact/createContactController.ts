import { z } from "zod";
import { Controller } from "../../../types";
import { createContactService } from "./createContactService";
import { createContactSchema } from "./createContactSchema";
import { TokenPayload } from "../../auth/login/loginService";

export const createContactController: Controller = async (_req, res, next) => {
  try {
    const { id } = res.locals?.tokenPayload as TokenPayload;
    const newContact = res.locals?.body as NewContact;
    await createContactService(id, newContact);

    res.status(201).json({ msg: "Contacto agregado correctamente." });
  } catch (error) {
    next(error);
  }
};

type NewContact = z.infer<typeof createContactSchema>;
