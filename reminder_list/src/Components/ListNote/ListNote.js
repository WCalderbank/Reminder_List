import React from "react";
import "./ListNote.css";

function ListNote({ text, handleClick }) {
  function createGhost() {
    const colors = ["#ff0000", "#ff7300", "#00eaff", "#fab2e4", "#00ff00"];
    const randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
  }

  return (
    <li id="noteBox">
      <div>
        <div id="pacman"></div>
        <h3 id="h3">{text}</h3>
        <button
          id="delete-button"
          onClick={handleClick}
          style={{ color: createGhost() }}
        >
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
