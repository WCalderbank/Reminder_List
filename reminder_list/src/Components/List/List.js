import React from "react";
import ListNote from "../ListNote/ListNote";
import "./List.css";

function List({ list, deleteFromList }) {
  return (
    <ol id="list">
      {list.map(({ id, text }, index) => (
        <ListNote
          key={id}
          text={text}
          handleClick={() => deleteFromList(index)}
        />
      ))}
    </ol>
  );
}

export default List;
