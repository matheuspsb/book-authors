import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";

export default function BookDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="teal">Adicionar Livro</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Adicionar Livro</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Preencha os campos abaixo para adicionar um novo livro.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Nome
            </Text>
            <TextField.Root
              defaultValue=""
              placeholder="Digite o nome do livro"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Autor
            </Text>
            <TextField.Root
              defaultValue=""
              placeholder="Digite o autor do livro"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Número de páginas
            </Text>
            <TextField.Root
              defaultValue=""
              placeholder="Digite o número de páginas do livro"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancelar
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Salvar</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
