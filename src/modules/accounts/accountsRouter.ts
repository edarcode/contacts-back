import { Router } from "express";
import { getAccountRouter } from "./get-account/getAccountRouter";

export const accountsRouter = Router();

accountsRouter.use("/get-account", getAccountRouter);
