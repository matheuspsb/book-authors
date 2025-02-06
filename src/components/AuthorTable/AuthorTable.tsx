import { Card, Table, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Author } from "../../types/author.type";
import AuthorDetailsDialog from "../AuthorDialog/AuthorDetailsDialog";

interface BooksTableProps {
  authors: Author[];
}

export default function AuthorsTable({ authors }: BooksTableProps) {
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

  if (authors.length === 0) {
    return <Text>Nenhum autor cadastrado</Text>;
  }

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
            <Table.Row key={author.id} onClick={() => setSelectedAuthor(author)}>
              <Table.RowHeaderCell>{author.name}</Table.RowHeaderCell>
              <Table.Cell>{author.email || "-"}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      {selectedAuthor && (
        <AuthorDetailsDialog
          setSelectedAuthor={setSelectedAuthor}
          selectedAuthor={selectedAuthor}
        />
      )}
    </Card>
  );
}
