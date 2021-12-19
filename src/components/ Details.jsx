import React from "react";
import "../styles/Details.scss";
import { Icon, Ptext } from ".";

const Details = ({ icon, text }) => {
  return (
    <div className="Details">
      <Icon className={`Details__Icon ${icon}`} />
      <Ptext className="Details__text" text={text} />
    </div>
  );
};

export default Details;
