import { Router } from "express";
import { verifyBody } from "../../../middlewares/verifyBody";
import { verifyToken } from "../../../middlewares/verifyToken";
import { updateContactSchema } from "./updateContactSchema";
import { updateContactController } from "./updateContactController";

export const updateContactRouter = Router();

updateContactRouter.patch(
  "",
  [verifyToken, verifyBody(updateContactSchema)],
  updateContactController
);
