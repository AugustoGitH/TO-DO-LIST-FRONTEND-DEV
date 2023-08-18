import { type z } from "zod";

import { loginSchema } from ".";

export type IFormLogin = z.infer<typeof loginSchema>;
