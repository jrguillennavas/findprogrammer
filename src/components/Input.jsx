import React from "react";
const Input = ({ className, type, value, name, id, placeholder, handleInput }) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={handleInput}
    />
  );
};
export default Input;
