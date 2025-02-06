import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { AuthorFormData, authorSchema } from "../schemas/authorForm.schema";

export const useAuthorForm = (onSuccess: VoidFunction) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthorFormData>({
    resolver: yupResolver(authorSchema),
  });

  const onSubmit = (data: AuthorFormData) => {
    const newAuthor = {
      id: uuidv4(),
      ...data,
    };
    const existingAuthors = JSON.parse(localStorage.getItem("@author") || "[]");
    const updatedAuthors = [...existingAuthors, newAuthor];
    localStorage.setItem("@author", JSON.stringify(updatedAuthors));
    onSuccess();
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
