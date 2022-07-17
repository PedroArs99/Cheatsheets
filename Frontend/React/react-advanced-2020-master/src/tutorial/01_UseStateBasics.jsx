import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Default Value");

  const handleClick = () => {
    if(text === 'Default Value') {
      setText('Whatever new value');
    }else {
      setText('Default Value')
    }
  }

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button
        type="button"
        className="btn"
        onClick={handleClick}
      >
        Change text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
