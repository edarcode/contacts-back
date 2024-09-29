import { Router } from "express";
import { createAccountController } from "./createAccountController";
import { verifyBody } from "../../../middlewares/verifyBody";
import { createAccountSchema } from "./createAccountSchema";

export const createAccountRouter = Router();

createAccountRouter.post(
  "",
  verifyBody(createAccountSchema),
  createAccountController
);
