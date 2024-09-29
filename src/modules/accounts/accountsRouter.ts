import { Router } from "express";
import { createAccountRouter } from "./create-account/createAccountRouter";

export const accountsRouter = Router();

accountsRouter.use("/create-account", createAccountRouter);
accountsRouter.use("/read-user", () => {});
