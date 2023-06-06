import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const localFetchHandler = async () => {
  let json_db = [
    { _id: 1, name: "Wings of fire", description: "A good book", price: 1000, author: "A.P.J.Abdul Kalam", image: "images/1.jpg" },
    { _id: 2, name: "Ignited minds", description: "A great book", price: 3000, author: "A.P.J.Abdul Kalam", image: "images/2.jpg" },
  ];

  return json_db;
};

const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    localFetchHandler().then((data) => setBooks(data));
  }, []);
  console.log(books);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
