import {
  Button,
  Dialog,
  Flex,
  Select,
  Text,
  TextField,
} from "@radix-ui/themes";
import { Controller } from "react-hook-form";
import { useBookForm } from "../../hooks/useBookForm";

export default function BookForm({ onSuccess }: { onSuccess: VoidFunction }) {
  const { register, handleSubmit, onSubmit, errors, control, authors } =
    useBookForm(onSuccess);

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
            Autor
          </Text>
          <Controller
            name="author_id"
            control={control}
            render={({ field }) => (
              <Select.Root
                size="2"
                onValueChange={field.onChange}
                value={field.value}
              >
                <Select.Trigger
                  placeholder="Selecione um autor"
                  style={{ width: "100%" }}
                />
                <Select.Content>
                  {authors.map((author) => (
                    <Select.Item key={author.id} value={author.id}>
                      {author.name}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            )}
          />
          {errors.author_id && (
            <Text color="red">{errors.author_id.message}</Text>
          )}
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Páginas
          </Text>
          <TextField.Root
            placeholder="Digite o email do autor"
            {...register("pages", {
              setValueAs: (value) => (value === "" ? undefined : Number(value)),
            })}
          />
          {errors.pages && <Text color="red">{errors.pages.message}</Text>}
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
