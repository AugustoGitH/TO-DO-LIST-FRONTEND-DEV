import * as zod from "zod";

export const loginSchema = zod.object({
  email: zod
    .string()
    .nonempty("O e-mail é obrigatório!")
    .email("Formato de e-mail inválido!")
    .min(17, "O e-mail deve conter no minímo 17 caracteres.")
    .max(100, "O e-mail deve conter no maximo 100 caracteres."),
  password: zod
    .string()
    .nonempty("A senha é obrigatório!")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/,
      "A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número."
    ),
});
