import { Router } from "express";
import { createContactRouter } from "./create-contact/createContactRouter";

export const contactsRouter = Router();

contactsRouter.use("/create-contact", createContactRouter);
