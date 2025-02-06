import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useAuthorForm } from "../../hooks/useAuthorForm";

export function AuthorForm({ onSuccess }: { onSuccess: VoidFunction }) {
  const { register, handleSubmit, errors, onSubmit } = useAuthorForm(onSuccess);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="3">
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Nome*
          </Text>
          <TextField.Root
            placeholder="Digite o nome do autor"
            {...register("name")}
          />
          {errors.name && <Text color="red">{errors.name.message}</Text>}
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Email
          </Text>
          <TextField.Root
            placeholder="Digite o email do autor"
            {...register("email")}
          />
          {errors.email && <Text color="red">{errors.email.message}</Text>}
        </label>
      </Flex>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            Cancelar
          </Button>
        </Dialog.Close>
        <Button type="submit">Salvar</Button>
      </Flex>
    </form>
  );
}
