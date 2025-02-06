import { Card, Table, Text } from "@radix-ui/themes";
import { Author } from "../../types/author.type";
import { BookType } from "../../types/book.type";

interface BooksTableProps {
  books: BookType[];
  authors: Author[];
}

export default function BooksTable({ books, authors }: BooksTableProps) {
  if(books.length === 0) {
    return (
      <Text>Nenhum livro cadastrado</Text>
    )
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

        <Table.Body>
          {books.map((book: BookType) => {
            const author = authors.find((author) => author.id === book.author_id);
            return (
              <Table.Row key={book.id}>
                <Table.RowHeaderCell>{book.name}</Table.RowHeaderCell>
                <Table.Cell>{author ? author.name : "Desconhecido"}</Table.Cell>
                <Table.Cell>{book.pages || "-"}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Card>
  );
}
