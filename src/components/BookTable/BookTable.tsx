import { TrashIcon } from "@radix-ui/react-icons";
import { Button, Card, Table, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Author } from "../../types/author.type";
import { BookType } from "../../types/book.type";
import AlertDialog from "../AlertDialog/AlertDialog";
import BookDetailsDialog from "../BookDialog/BookDetailsDialog";
import * as S from "./styles";

interface BooksTableProps {
  books: BookType[];
  authors: Author[];
  removeBook: (bookId: string) => void;
}

export default function BooksTable({ books, authors, removeBook }: BooksTableProps) {
  const [selectedBook, setSelectedBook] = useState<BookType | null>(null);
  const [dialogInfo, setDialogInfo] = useState({
    isOpen: false,
    bookId: "",
  });

  if (books.length === 0) {
    return <Text>Nenhum livro cadastrado</Text>;
  }

  return (
    <Card>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Autor</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Páginas</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <S.TableBody>
          {books.map((book: BookType) => {
            const author = authors.find(
              (author) => author.id === book.author_id
            );
            return (
              <Table.Row key={book.id} onClick={() => setSelectedBook(book)}>
                <S.TableCell>{book.name}</S.TableCell>
                <S.TableCell>{author ? author.name : "Desconhecido"}</S.TableCell>
                <S.TableCell>{book.pages || "-"}</S.TableCell>
                <S.LastTableCell>
                <Button
                  variant="classic"
                  color="red"
                  onClick={(event) => {
                    event.stopPropagation();
                    setDialogInfo({
                      isOpen: true,
                      bookId: book.id,
                    });
                  }}
                >
                  Excluir
                  <TrashIcon color="white" pointerEvents={"none"} />
                </Button>
              </S.LastTableCell>
              </Table.Row>
            );
          })}
        </S.TableBody>
      </Table.Root>

      {selectedBook && (
        <BookDetailsDialog
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
          authors={authors}
        />
      )}

      <AlertDialog
        open={dialogInfo.isOpen}
        setOpen={(isOpen) => setDialogInfo({ ...dialogInfo, isOpen })}
        onConfirm={() => removeBook(dialogInfo.bookId)}
      />
    </Card>
  );
}
