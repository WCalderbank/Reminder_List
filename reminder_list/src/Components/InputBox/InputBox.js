import React, { useState } from "react";
import "./InputBox.css";

function InputBox({ handleClick }) {
  const [text, setText] = useState("");

  function updateText(e) {
    setText(e.target.value);
  }

  return (
    <div id="submit">
      <input
        id="input-box"
        maxLength="75"
        onInput={updateText}
        type="text"
        required
      />
      <button id="submitBtn" onClick={(e) => handleClick(e, text)}>
        INSERT TOKEN
      </button>
    </div>
  );
}

export default InputBox;
