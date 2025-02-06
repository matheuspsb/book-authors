import { Card, Table, Text } from "@radix-ui/themes";
import { Author } from "../../types/author.type";

interface BooksTableProps {
  authors: Author[];
}

export default function AuthorsTable({ authors }: BooksTableProps) {

  if(authors.length === 0) {
    return (
      <Text>Nenhum autor cadastrado</Text>
    )
  }

  console.log(authors)

  return (
    <Card>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {authors.map((author: Author) => (
            <Table.Row key={author.id}>
              <Table.RowHeaderCell>{author.name}</Table.RowHeaderCell>
              <Table.Cell>{author.email || "-"}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
}
