import React, { useState } from "react";

const Input = ({ label, inputName, kindInputWidth, value, handler }) => {
  return (
    <div id="singleInputContainer">
      <label>
        {label}
        <input
          type="text"
          className={kindInputWidth}
          name={inputName}
          value={value}
          onChange={handler}
        />
      </label>
    </div>
  );
};

export default Input;
