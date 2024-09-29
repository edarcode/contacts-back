import { z } from "zod";
import { Controller } from "../../../types";
import { TokenPayload } from "../../auth/login/loginService";
import { getContactsService } from "./getContactsService";
import { getContactsSchema } from "./getContactsSchema";

export const getContactsController: Controller = async (_req, res, next) => {
  try {
    const { id } = res.locals?.tokenPayload as TokenPayload;
    const filters = res.locals?.query as Query;
    const contacts = await getContactsService(id, filters);
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

type Query = z.infer<typeof getContactsSchema>;
