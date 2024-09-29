import { z } from "zod";
import { Controller } from "../../../types";
import { readAccountByIdService } from "./readAccountByIdService";
import { paramsWithIdSchema } from "../../../zod-schemas/paramsWithIdSchema";
import { UUID } from "crypto";

export const readAccountByIdController: Controller = async (
  _req,
  res,
  next
) => {
  try {
    const { id } = res.locals?.params as Params;
    const account = await readAccountByIdService(id as UUID);
    res.status(200).json(account);
  } catch (error) {
    next(error);
  }
};

type Params = z.infer<typeof paramsWithIdSchema>;
