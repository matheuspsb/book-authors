import * as yup from "yup";

export const bookSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  author_id: yup
    .string()
    .required("O autor é obrigatório"),
  pages: yup
    .number()
    .typeError("A quantidade de páginas deve ser um número")
    .optional(),
});

export type BookFormData = yup.InferType<typeof bookSchema>;
