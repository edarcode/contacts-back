import { Router } from "express";
import { verifyToken } from "../../../middlewares/verifyToken";
import { removeContactController } from "./removeContactController";
import { verifyParams } from "../../../middlewares/verifyParams";
import { paramsWithIdSchema } from "../../../zod-schemas/paramsWithIdSchema";

export const removeContactRouter = Router();

removeContactRouter.delete(
  "/:id",
  [verifyToken, verifyParams(paramsWithIdSchema)],
  removeContactController
);
