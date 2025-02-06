import { TrashIcon } from "@radix-ui/react-icons";
import { Button, Card, Table, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Author } from "../../types/author.type";
import AlertDialog from "../AlertDialog/AlertDialog";
import AuthorDetailsDialog from "../AuthorDialog/AuthorDetailsDialog";
import * as S from "./styles";

interface BooksTableProps {
  authors: Author[];
  removeAuthor: (authorId: string) => void;
}

export default function AuthorsTable({
  authors,
  removeAuthor,
}: BooksTableProps) {
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);
  const [dialogInfo, setDialogInfo] = useState({
    isOpen: false,
    authorId: "",
  });

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
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <S.TableBody>
          {authors.map((author: Author) => (
            <Table.Row
              key={author.id}
              onClick={() => setSelectedAuthor(author)}
            >
              <S.TableCell>{author.name}</S.TableCell>
              <S.TableCell>{author.email || "-"}</S.TableCell>
              <S.LastTableCell>
                <Button
                  variant="classic"
                  color="red"
                  onClick={(event) => {
                    event.stopPropagation();
                    setDialogInfo({
                      isOpen: true,
                      authorId: author.id,
                    });
                  }}
                >
                  Excluir
                  <TrashIcon color="white" pointerEvents={"none"} />
                </Button>
              </S.LastTableCell>
            </Table.Row>
          ))}
        </S.TableBody>
      </Table.Root>

      {selectedAuthor && (
        <AuthorDetailsDialog
          setSelectedAuthor={setSelectedAuthor}
          selectedAuthor={selectedAuthor}
        />
      )}
      <AlertDialog
        open={dialogInfo.isOpen}
        setOpen={(isOpen) => setDialogInfo({ ...dialogInfo, isOpen })}
        onConfirm={() => removeAuthor(dialogInfo.authorId)}
      />
    </Card>
  );
}
