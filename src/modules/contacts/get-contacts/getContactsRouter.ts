import { Router } from "express";
import { getContactsController } from "./getContactsController";
import { verifyToken } from "../../../middlewares/verifyToken";
import { verifyQuery } from "../../../middlewares/verifyQuery";
import { getContactsSchema } from "./getContactsSchema";

export const getContactsRouter = Router();

getContactsRouter.get(
  "",
  [verifyToken, verifyQuery(getContactsSchema)],
  getContactsController
);
