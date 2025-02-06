import { Button, Dialog } from "@radix-ui/themes";
import { useState } from "react";
import { AuthorForm } from "../AuthorForm/AuthorForm";

export default function AuthorDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger>
        <Button color="teal">Adicionar Autor</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Adicionar Autor</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Preencha os campos abaixo para adicionar um novo livro.
        </Dialog.Description>
        <AuthorForm onSuccess={() => setIsOpen(false)} />  
      </Dialog.Content>
    </Dialog.Root>
  );
}
