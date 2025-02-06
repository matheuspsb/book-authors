import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useLibrary } from "../context/LibraryContext";
import { BookFormData, bookSchema } from "../schemas/bookForm.schema";

export const useBookForm = (onSuccess: VoidFunction) => {
  const { authors, addBook } = useLibrary();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookFormData>({
    resolver: yupResolver(bookSchema),
  });

  const onSubmit = (data: BookFormData) => {
    const transformedData = {
      ...data,
      author_id: data.author_id,
      pages: data.pages ? Number(data.pages) : undefined,
      id: uuidv4(), 
    };

    addBook(transformedData);
    onSuccess();
  };

  return {
    register,
    handleSubmit,
    errors,
    control,
    authors,
    onSubmit,
  };
};
