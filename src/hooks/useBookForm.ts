import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BookFormData, bookSchema } from "../schemas/bookForm.schema";


export const useBookForm = (onSuccess: VoidFunction) => {
  const [authors, setAuthors] = useState<{ id: string; name: string }[]>([]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookFormData>({
    resolver: yupResolver(bookSchema),
  });

  useEffect(() => {
    const storedAuthors = localStorage.getItem("@author");

    if (storedAuthors) {
      setAuthors(JSON.parse(storedAuthors));
    }
  }, [])

  const onSubmit = (data: BookFormData) => {
    const transformedData = {
      ...data,
      author_id: data.author_id,
      pages: data.pages ? Number(data.pages) : undefined,
    };
    console.log(transformedData);
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
