import React, { useState } from "react";

function InputBox({ handleClick }) {
  const [text, setText] = useState("");

  function updateText(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input
        id="input-box"
        maxLength="75"
        onInput={updateText}
        type="text"
        required
      />
      <button onClick={(e) => handleClick(e, text)}>Submit</button>
    </div>
  );
}

export default InputBox;
