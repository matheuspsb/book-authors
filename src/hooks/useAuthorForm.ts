import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useLibrary } from "../context/LibraryContext";
import { AuthorFormData, authorSchema } from "../schemas/authorForm.schema";

export const useAuthorForm = (onSuccess: VoidFunction) => {
  const { addAuthors } = useLibrary();

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

    addAuthors(newAuthor);
    onSuccess();
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
