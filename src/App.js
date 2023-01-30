import "./styles.css";

/*const books = ["vkjn", "kvns vk", "vksnv", "kvnsvk"];
const hobbies = ["ghkhb", "hb", "hbihg", "hjvuv"];
const subjects = ["fknwf", "f l", "cm ", "ck dkw"];

const genre = [books, hobbies, subjects];
export default function App() {
  return (
    <>
      <h1>My likes </h1>
      <ul>{
        genre.map(function (item,index){
          return <li><button>{item[index]}</button></li>
        })
      }</ul>
    </>
  );
}*/
import React, { useState } from "react";
import "./styles.css";

const books = ["Books", "Novels", "Textbooks", "Biographies"];
const hobbies = ["Painting", "Reading", "Photography", "Gaming"];
const subjects = ["Math", "Science", "History", "English"];

const genres = [
  { name: "Books", items: books },
  { name: "Hobbies", items: hobbies },
  { name: "Subjects", items: subjects }
];

export default function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  function showlist(items) {
    setSelectedItems(items);
  }

  return (
    <>
      <h1>My Likes</h1>
      <ul>
        {genres.map((genre) => (
          <li key={genres}>
            <button onClick={() => showlist(genre.items)}>{genre.name}</button>
          </li>
        ))}
      </ul>
      <ul className="headliped">
        {selectedItems.map((item) => (
          <li
            className="liped"
            style={{ liststyle: "none", backgroundColor: "#FFFBEB" }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
