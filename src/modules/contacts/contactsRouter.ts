import { Router } from "express";
import { createContactRouter } from "./create-contact/createContactRouter";
import { getContactsRouter } from "./get-contacts/getContactsRouter";

export const contactsRouter = Router();

contactsRouter.use("/create-contact", createContactRouter);
contactsRouter.use("/get-contacts", getContactsRouter);
