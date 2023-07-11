import { Category } from "./Category";

export const Books = ({ books, borrowBook, returnBook }) => {

const programmingBooks = books.filter((book) => {
  return book.category === "programming";
})

  return (
    <>
      <h2>Books: {books.length}</h2>
      <Category
        title="Programming"
        programmingBooks={programmingBooks}
        borrowBook={borrowBook}
        returnBook={returnBook}
      />
    </>
  );
};
