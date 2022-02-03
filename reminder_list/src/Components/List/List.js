import React from "react";
import ListNote from "../ListNote/ListNote";

function List({ list, deleteFromList }) {
  return (
    <ol>
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
