import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Author } from "../types/author.type";
import { BookType } from "../types/book.type";

interface LibraryContextType {
  authors: Author[];
  books: BookType[];
  setAuthors: React.Dispatch<React.SetStateAction<Author[]>>;
  setBooks: React.Dispatch<React.SetStateAction<BookType[]>>;
  addBook: (newBook: BookType) => void;
  addAuthors: (newAuthor: Author) => void;
  removeBook: (bookId: string) => void;
  removeAuthor: (authorId: string) => void;
}

const LibraryContext = createContext<LibraryContextType | null>(null);

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error("useLibrary deve ser usado dentro de um LibraryProvider");
  }
  return context;
};

export const LibraryProvider = ({ children }: { children: ReactNode }) => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [books, setBooks] = useState<BookType[]>([]);

  useEffect(() => {
    const storedAuthors = JSON.parse(localStorage.getItem("@author") || "[]");
    const storedBooks = JSON.parse(localStorage.getItem("@book") || "[]");

    setAuthors(storedAuthors);
    setBooks(storedBooks);
  }, []);

  const addBook = (newBook: BookType) => {
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    localStorage.setItem("@book", JSON.stringify(updatedBooks));
  };

  const addAuthors = (newAuthor: Author) => {
    const updatedAuthors = [...authors, newAuthor];
    setAuthors(updatedAuthors);
    localStorage.setItem("@author", JSON.stringify(updatedAuthors));
  };

  const removeBook = (bookId: string) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
    localStorage.setItem("@book", JSON.stringify(updatedBooks));
  };

  const removeAuthor = (authorId: string) => {
    const updatedAuthors = authors.filter((author) => author.id !== authorId);
    setAuthors(updatedAuthors);
    localStorage.setItem("@author", JSON.stringify(updatedAuthors));
  };

  return (
    <LibraryContext.Provider
      value={{
        authors,
        books,
        setAuthors,
        setBooks,
        addBook,
        addAuthors,
        removeBook,
        removeAuthor,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};
