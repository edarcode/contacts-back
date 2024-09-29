import { z } from "zod";

export const tellSchema = z.string().min(1).max(25);
