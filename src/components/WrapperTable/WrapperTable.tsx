import { useLibrary } from "../../context/LibraryContext";
import AuthorDialog from "../AuthorDialog/AuthorDialog";
import AuthorsTable from "../AuthorTable/AuthorTable";
import BookDialog from "../BookDialog/BookDialog";
import BooksTable from "../BookTable/BookTable";
import * as S from "./styles";

export default function WrapperTable() {
  const { books, authors, removeAuthor, removeBook } = useLibrary();

  return (
    <S.ContentWrapper>
        <S.ContainerActions>
          <S.StyledText size="6" weight="medium">
            Todos os livros cadastrados:
          </S.StyledText>
          <BookDialog />
        </S.ContainerActions>

        <BooksTable books={books} authors={authors} />

        <S.ContainerActions>
          <S.StyledText size="6" weight="medium">
            Todos os autores cadastrados:
          </S.StyledText>     
          <AuthorDialog />
        </S.ContainerActions>

        <AuthorsTable authors={authors} removeAuthor={removeAuthor} />

      </S.ContentWrapper>
  )
}