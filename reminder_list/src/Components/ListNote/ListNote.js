import React from "react";
import "./ListNote.css";

function ListNote({ text, handleClick }) {
  return (
    <li id="noteBox">
      <div>
        <div id="pacman"></div>
        <h3 id="h3">{text}</h3>
        <button id="delete-button" onClick={handleClick}>
          <i id="ghost" class="fas fa-ghost"></i>
        </button>

        <button id="dots">
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </li>
  );
}

export default ListNote;
