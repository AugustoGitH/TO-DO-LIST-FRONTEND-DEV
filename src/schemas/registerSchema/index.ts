import * as zod from "zod";

export const registerSchema = zod.object({
  name: zod
    .string()
    .nonempty("O nome é obrigatório!")
    .min(4, "O nome deve conter no minímo 4 caracteres.")
    .max(120, "O nome deve conter no maximo 120 caracteres."),
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
