import { type z } from "zod";
import { registerSchema } from ".";

export type IFormRegister = z.infer<typeof registerSchema>;
