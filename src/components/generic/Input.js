import React from "react";

const Input = ({ value='', type='number', onChange }) => {
  return (
    <input
    type={type}
    value={value}
    onChange={onChange}
    min="1"
    >
    </input>
  );
};

export default Input;
