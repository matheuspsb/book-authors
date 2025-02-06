import * as yup from "yup";

export const authorSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("E-mail inválido").optional(),
});

export type AuthorFormData = yup.InferType<typeof authorSchema>;