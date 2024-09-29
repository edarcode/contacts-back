import { EdarErr } from "../errors/EdarErr";
import { Middleware } from "../types";

// recuerda tipar el role
export const verifyRole = (role: any): Middleware => {
  return (_req, res, next) => {
    try {
      const userRole = res.locals?.tokenPayload?.role;
      if (userRole !== role)
        throw new EdarErr({ status: 403, msg: "Unautorized role" });
      next();
    } catch (error) {
      next(error);
    }
  };
};
