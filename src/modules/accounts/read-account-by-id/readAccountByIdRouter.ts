import { Router } from "express";
import { paramsWithIdSchema } from "../../../zod-schemas/paramsWithIdSchema";
import { verifyParams } from "../../../middlewares/verifyParams";
import { readAccountByIdController } from "./readAccountByIdController";

export const readAccountByIdRouter = Router();

readAccountByIdRouter.get(
  "/:id",
  verifyParams(paramsWithIdSchema),
  readAccountByIdController
);
