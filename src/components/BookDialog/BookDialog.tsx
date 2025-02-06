import { Dialog } from "@radix-ui/themes";
import { useState } from "react";
import BookForm from "../BookForm/BookForm";
import * as S from "./styles";

export default function BookDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger>
        <S.StyledButton color="teal">Adicionar Livro</S.StyledButton>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Adicionar Livro</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Preencha os campos abaixo para adicionar um novo livro.
        </Dialog.Description>

        <BookForm onSuccess={() => setIsOpen(false)} />
      </Dialog.Content>
    </Dialog.Root>
  );
}
