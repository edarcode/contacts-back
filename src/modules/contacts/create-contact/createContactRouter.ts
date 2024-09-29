import { Router } from "express";
import { verifyBody } from "../../../middlewares/verifyBody";
import { createContactController } from "./createContactController";
import { createContactSchema } from "./createContactSchema";
import { verifyToken } from "../../../middlewares/verifyToken";

export const createContactRouter = Router();

createContactRouter.post(
  "",
  [verifyToken, verifyBody(createContactSchema)],
  createContactController
);
