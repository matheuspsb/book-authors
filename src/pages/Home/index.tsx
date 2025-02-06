import { Card, Table } from "@radix-ui/themes";
import AuthorDialog from "../../components/AuthorDialog/AuthorDialog";
import BookDialog from "../../components/BookDialog/BookDialog";
import * as S from "./styles";

const authors = [
  { id: 1, name: "Danilo Sousa", email: "danilo@example.com" },
  { id: 2, name: "Zahra Ambessa", email: "zahra@example.com" },
  { id: 3, name: "Jasper Eriksson", email: "jasper@example.com" },
];

const books = [
  { id: 1, name: "Aventuras no Código", author_id: 1, pages: 320 },
  { id: 2, name: "O Mistério do JavaScript", author_id: 2, pages: 280 },
  { id: 3, name: "React para Iniciantes", author_id: 3, pages: 400 },
];

export default function Home() {
  return (
    <S.ScreenContainer>
      <S.ContentWrapper>
        <S.ContainerActions>
          <S.StyledText size="6" weight="medium">
            Todos os livros cadastrados:
          </S.StyledText>
          <BookDialog />
        </S.ContainerActions>

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
              {books.map((book) => {
                const author = authors.find(
                  (author) => author.id === book.author_id
                );
                return (
                  <Table.Row key={book.id}>
                    <Table.RowHeaderCell>{book.name}</Table.RowHeaderCell>
                    <Table.Cell>
                      {author ? author.name : "Desconhecido"}
                    </Table.Cell>
                    <Table.Cell>{book.pages || "-"}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Root>
        </Card>

        <S.ContainerActions>
          <S.StyledText size="6" weight="medium">
            Todos os autores cadastrados:
          </S.StyledText>     
          <AuthorDialog />
        </S.ContainerActions>

        <Card>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {authors.map((author) => (
                <Table.Row key={author.id}>
                  <Table.RowHeaderCell>{author.name}</Table.RowHeaderCell>
                  <Table.Cell>{author.email || "-"}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Card>
      </S.ContentWrapper>
    </S.ScreenContainer>
  );
}
