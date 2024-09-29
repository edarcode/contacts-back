import { z } from "zod";
import { Controller } from "../../../types";
import { TokenPayload } from "../../auth/login/loginService";
import { removeContactService } from "./removeContactService";
import { paramsWithIdSchema } from "../../../zod-schemas/paramsWithIdSchema";
import { UUID } from "crypto";

export const removeContactController: Controller = async (_req, res, next) => {
  try {
    const { id: accountId } = res.locals?.tokenPayload as TokenPayload;
    const { id: contactId } = res.locals?.params as Params;
    await removeContactService(accountId, contactId as UUID);

    res.status(200).json({ msg: "Contacto borrado correctamente" });
  } catch (error) {
    next(error);
  }
};

type Params = z.infer<typeof paramsWithIdSchema>;
