import { z } from "zod";
import { Controller } from "../../../types";
import { createAccountService } from "./createAccountService";
import { createAccountSchema } from "./createAccountSchema";

export const createAccountController: Controller = async (_req, res, next) => {
  try {
    const newUser = res.locals?.body as Body;
    await createAccountService(newUser);
    res.status(201).json({ msg: "Cuenta registrada correctamente" });
  } catch (error) {
    next(error);
  }
};

type Body = z.infer<typeof createAccountSchema>;
