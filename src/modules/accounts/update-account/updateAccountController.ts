import { z } from "zod";
import { Controller } from "../../../types";
import { TokenPayload } from "../../auth/login/loginService";
import { updateAccountService } from "./updateAccountService";
import { updateAccountSchema } from "./updateAccountSchema";

export const updateAccountController: Controller = async (_req, res, next) => {
  try {
    const { id: accountId } = res.locals?.tokenPayload as TokenPayload;
    const body = res.locals?.body as Body;
    await updateAccountService(accountId, body);

    res.status(200).json({ msg: "Cuenta actualizada correctamente" });
  } catch (error) {
    next(error);
  }
};

type Body = z.infer<typeof updateAccountSchema>;
