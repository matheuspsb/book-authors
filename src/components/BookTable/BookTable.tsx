import { Card, Table, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Author } from "../../types/author.type";
import { BookType } from "../../types/book.type";
import BookDetailsDialog from "../BookDialog/BookDetailsDialog";
import * as S from "./styles";

interface BooksTableProps {
  books: BookType[];
  authors: Author[];
}

export default function BooksTable({ books, authors }: BooksTableProps) {
  const [selectedBook, setSelectedBook] = useState<BookType | null>(null);

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
          </Table.Row>
        </Table.Header>

        <S.TableBody>
          {books.map((book: BookType) => {
            const author = authors.find(
              (author) => author.id === book.author_id
            );
            return (
              <Table.Row key={book.id} onClick={() => setSelectedBook(book)}>
                <Table.RowHeaderCell>{book.name}</Table.RowHeaderCell>
                <Table.Cell>{author ? author.name : "Desconhecido"}</Table.Cell>
                <Table.Cell>{book.pages || "-"}</Table.Cell>
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
    </Card>
  );
}
