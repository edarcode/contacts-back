import { Router } from "express";
import { createAccountRouter } from "./create-account/createAccountRouter";
import { readAccountByIdRouter } from "./read-account-by-id/readAccountByIdRouter";

export const accountsRouter = Router();

accountsRouter.use("/create-account", createAccountRouter);
accountsRouter.use("/read-account-by-id", readAccountByIdRouter);
