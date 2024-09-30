import { Router } from "express";
import { verifyBody } from "../../../middlewares/verifyBody";
import { verifyToken } from "../../../middlewares/verifyToken";
import { updateAccountSchema } from "./updateAccountSchema";
import { updateAccountController } from "./updateAccountController";

export const updateAccountRouter = Router();

updateAccountRouter.patch(
  "",
  [verifyToken, verifyBody(updateAccountSchema)],
  updateAccountController
);
