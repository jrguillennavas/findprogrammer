import React from "react";
import "../styles/Error.scss";
import { Ptext } from ".";
const Error = ({ error }) => {
  if (error) {
    return (
      <div className="Error">
        <Ptext text="Programmer name does not exist" />
      </div>
    );
  }
  return false;
};
export default Error;
