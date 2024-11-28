import React, { useEffect, useState } from "react";

export default function Question8() {
  /*  
   Question 8:
    Create a React component that renders a list of books with the following features:
    
    - Initial List: The component should start with an initial list of three books, each having a title and an author.
    - Add Book: Allow users to add a new book by entering the title and author in input fields and clicking an "Add Book" button.
    - Delete Book: Each book in the list should have a "Delete" button that removes the book from the list.
    - Edit Book: Each book should have an "Edit" button. When clicked:
    - The book's title and author should become editable (showing input fields for both).
    - A "Save" button should appear, allowing the user to save the changes.
    
    Requirements:
    
    - Ensure that the changes only apply when "Save" is clicked.
    - Handle cases where the user tries to add a book with an empty title or author.
    - Ensure that when a book is deleted, the remaining list re-renders correctly. 
    */
  const [books, setBooks] = useState([
    { id: 1, bookTitle: "Change or perish", author: "Kelvin" },
    { id: 2, bookTitle: "The river and the source", author: "Juma Akech" },
    { id: 3, bookTitle: "Paradise", author: "Unknown" },
  ]);
  const [bookToEditId, setBookToEditId] = useState(null); // track id of book to be edited
  const [bookToAdd, setBookToAdd] = useState({ bookTitle: "", author: "" });
  const [bookToEdit, setBookToEdit] = useState({ bookTitle: "", author: "" });
  //add book function
  const addBook = () => {
    //check for empty value
    if (!bookToAdd.bookTitle.trim() || !bookToAdd.author) {
      alert("Book title and author required!");
      return;
    }
    //check for duplicate book entry
    const isDuplicate = books.some((book) => {
      bookToAdd.bookTitle.trim().toLocaleLowerCase() ===
        book.bookTitle.toLocaleLowerCase() &&
        bookToAdd.author.trim().toLocaleLowerCase() ===
          book.author.toLocaleLowerCase();
    });
    // return if duplicate
    if (isDuplicate) {
      alert(
        `The book ${bookToAdd.bookTitle} by ${bookToAdd.author} already exists!`
      );
      return;
    }
    //create a new id for the new book
    const newBook = { id: Date.now(), ...bookToAdd };
    //update books
    setBooks([...books, newBook]);
    // clear input fields
    setBookToAdd({ bookTitle: "", author: "" });
  };
  //saving edited book
  const saveEditedBook = (bookId) => {
    //check if both fields are empty
    if (!bookToEdit.bookTitle.trim() && !bookToEdit.author.trim()) {
      alert("Book title or author required!");
      return;
    }
    // update books
    setBooks(() =>
      books.map((book) =>
        book.id === bookId
          ? {
              ...book,
              bookTitle: bookToEdit.bookTitle || book.bookTitle, //take care of empty field

              author: bookToEdit.author || book.author, //take care of empty field
            }
          : book
      )
    );
    // clear input field
    setBookToEdit({ bookTitle: "", author: "" });
    // set editMode to false
    setBookToEditId(null);
  };
  //Remove book function
  const removeBook = (bookToRemoveId) => {
    //filter out the book to be removed by id
    setBooks(() => books.filter((book) => book.id !== bookToRemoveId));
  };

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="flex gap-4 py-2 border-red-100 border ">
            <span>Title: {book.bookTitle}</span>
            <span>Author: {book.author}</span>
            {
              //conditionally render either input for enditing book or delete and cancel btn based on book id state
              bookToEditId === book.id ? (
                <div className="flex gap-2 py-4">
                  <input
                    className="pl-2"
                    type="text"
                    name="editBookTitle"
                    id="editBookTitle"
                    placeholder="Add book title"
                    aria-label="edit book title"
                    value={bookToEdit.bookTitle}
                    onChange={(e) =>
                      setBookToEdit((prevState) => ({
                        ...prevState,
                        bookTitle: e.target.value,
                      }))
                    }
                  />
                  <input
                    className="pl-2"
                    type="text"
                    name="editBookAuthor"
                    id="editBookAuthor"
                    placeholder="Edit book author"
                    aria-label="Edit book author"
                    value={bookToEdit.author}
                    onChange={(e) =>
                      setBookToEdit((prevState) => ({
                        ...prevState,
                        author: e.target.value,
                      }))
                    }
                  />
                  <button
                    aria-label="save book edits"
                    onClick={() => {
                      saveEditedBook(book.id);
                      setBookToEditId(null);
                    }}
                  >
                    Save
                  </button>
                  <button
                    aria-label="cancel book edits"
                    onClick={() => setBookToEditId(null)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    aria-label={`Delete ${book.bookTitle} book`}
                    onClick={() => removeBook(book.id)}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    aria-label={`Edit ${book.bookTitle} book`}
                    onClick={() => setBookToEditId(book.id)}
                  >
                    Edit
                  </button>
                </>
              )
            }
          </li>
        ))}
      </ul>
      <div className="flex gap-2 py-4">
        <input
          className="pl-2"
          type="text"
          name="bookTitle"
          id="bookTitle"
          placeholder="Add book title"
          aria-label="book title"
          value={bookToAdd.bookTitle}
          onChange={(e) =>
            setBookToAdd((prevState) => ({
              ...prevState,
              bookTitle: e.target.value,
            }))
          }
        />
        <input
          className="pl-2"
          type="text"
          name="bookAuthor"
          id="bookAuthor"
          placeholder="Add book author"
          aria-label="book author"
          value={bookToAdd.author}
          onChange={(e) =>
            setBookToAdd((prevState) => ({
              ...prevState,
              author: e.target.value,
            }))
          }
        />
        <button onClick={addBook} aria-label="add book">
          Add Book
        </button>
      </div>
    </div>
  );
}
