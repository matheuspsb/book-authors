import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import { Author } from "../../types/author.type";
import { BookType } from "../../types/book.type";

interface BookDetailsDialogProps {
  selectedBook: BookType | null;
  setSelectedBook: React.Dispatch<React.SetStateAction<BookType | null>>;
  authors: Author[];
}

export default function BookDetailsDialog({ selectedBook, setSelectedBook, authors }: BookDetailsDialogProps) {
  return (
    <Dialog.Root
          open={!!selectedBook}
          onOpenChange={() => setSelectedBook(null)}
        >
          <Dialog.Content
            maxWidth={"450px"}
          >
            <Dialog.Title>Detalhes do Livro</Dialog.Title>
            <Flex direction="column" gap="3">
              <Text>
                <strong>📌 Nome:</strong> {selectedBook?.name}
              </Text>
              <Text>
                <strong>✍ Autor:</strong>{" "}
                {authors.find((a) => a.id === selectedBook?.author_id)?.name ||
                  "Desconhecido"}
              </Text>
              <Text>
                <strong>📑 Páginas:</strong> {selectedBook?.pages || "-"}
              </Text>
            </Flex>
            <Dialog.Close>
              <Button color="red" mt="4">Fechar</Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Root>
  )
} 