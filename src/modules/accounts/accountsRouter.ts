import { Router } from "express";
import { getAccountRouter } from "./get-account/getAccountRouter";
import { removeAccountRouter } from "./remove-account/removeAccountRouter";

export const accountsRouter = Router();

accountsRouter.use("/get-account", getAccountRouter);
accountsRouter.use("/remove-account", removeAccountRouter);
