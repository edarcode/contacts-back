import { z } from "zod";
import { Controller } from "../../../types";
import { TokenPayload } from "../../auth/login/loginService";
import { updateContactService } from "./updateContactService";
import { updateContactSchema } from "./updateContactSchema";

export const updateContactController: Controller = async (_req, res, next) => {
  try {
    const { id: accountId } = res.locals?.tokenPayload as TokenPayload;
    const body = res.locals?.body as Body;
    await updateContactService(accountId, body);

    res.status(200).json({ msg: "Contacto actualizado correctamente" });
  } catch (error) {
    next(error);
  }
};

type Body = z.infer<typeof updateContactSchema>;
