import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  function handleInputChange(e) {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({
      title: "",
      author: "",
    });
  }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={newBook.title}
            onChange={handleInputChange}
          />

          <label htmlFor="author">Author: </label>
          <input
            type="text"
            name="author"
            id="author"
            value={newBook.author}
            onChange={handleInputChange}
          />

          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div className="bookCard" key={index}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
