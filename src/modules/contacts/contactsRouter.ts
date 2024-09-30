import { Router } from "express";
import { createContactRouter } from "./create-contact/createContactRouter";
import { getContactsRouter } from "./get-contacts/getContactsRouter";
import { removeContactRouter } from "./remove-contact/removeContactRouter";
import { updateContactRouter } from "./update-contact/updateContactRouter";

export const contactsRouter = Router();

contactsRouter.use("/create-contact", createContactRouter);
contactsRouter.use("/get-contacts", getContactsRouter);
contactsRouter.use("/remove-contact", removeContactRouter);
contactsRouter.use("/update-contact", updateContactRouter);
