import React from "react";
import "./ListNote.css";

function ListNote({ text, handleClick }) {
  return (
    <li id="list">
      <div id="pacman">
        <dot id="eye">⚫️</dot>
      </div>
      <div id="noteBox">
        <h3 id="h3">{text}</h3>
        <button id="delete-button" onClick={handleClick}>
          Delete
        </button>
        <input type="checkbox" />
      </div>
    </li>
  );
}

export default ListNote;
