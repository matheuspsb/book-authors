import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import { Author } from "../../types/author.type";

interface AuthorDetailsDialogProps {
  setSelectedAuthor: React.Dispatch<React.SetStateAction<Author | null>>;
  selectedAuthor: Author | null;
}

export default function AuthorDetailsDialog({
  setSelectedAuthor,
  selectedAuthor,
}: AuthorDetailsDialogProps) {
  return (
    <Dialog.Root
      open={!!selectedAuthor}
      onOpenChange={() => setSelectedAuthor(null)}
    >
      <Dialog.Content
        maxWidth={"450px"}
      >
        <Dialog.Title>Detalhes do Autor</Dialog.Title>
        <Flex direction="column" gap="3">
          <Text>
            <strong>📌 Nome:</strong> {selectedAuthor?.name}
          </Text>
          <Text>
            <strong>📧 Email:</strong> {selectedAuthor?.email || "-"}
          </Text>
        </Flex>
        <Dialog.Close>
          <Button color="red" mt="4">
            Fechar
          </Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
}
