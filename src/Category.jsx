import { Book } from "./Book";

export const Category = ({
  title,
  programmingBooks,
  borrowBook,
  returnBook,
}) => {
  return (
    <>
      <h3>
        {title}: {programmingBooks.length}
      </h3>
      <div>
        {programmingBooks.map((book) => {
          return (
            <Book
              book={book}
              key={book.id}
              borrowBook={borrowBook}
              returnBook={returnBook}
            />
          );
        })}
      </div>
    </>
  );
};
