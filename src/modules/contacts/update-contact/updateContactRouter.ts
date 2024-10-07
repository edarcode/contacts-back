import { Router } from "express";
import { verifyBody } from "../../../middlewares/verifyBody";
import { verifyToken } from "../../../middlewares/verifyToken";
import { updateContactSchema } from "./updateContactSchema";
import { updateContactController } from "./updateContactController";
import { verifyParams } from "../../../middlewares/verifyParams";
import { paramsWithIdSchema } from "../../../zod-schemas/paramsWithIdSchema";

export const updateContactRouter = Router();

updateContactRouter.patch(
  ":id",
  [
    verifyToken,
    verifyBody(updateContactSchema),
    verifyParams(paramsWithIdSchema),
  ],
  updateContactController
);
