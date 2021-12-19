import React from "react";
const H1text = ({ text, className, numH }) => {
  if (parseInt(numH) === 1) return <h1 className={className}>{text}</h1>;
  if (parseInt(numH) === 2) return <h2 className={className}>{text}</h2>;
  if (parseInt(numH) === 3) return <h3 className={className}>{text}</h3>;
  if (parseInt(numH) === 4) return <h4 className={className}>{text}</h4>;
  if (parseInt(numH) === 5) return <h5 className={className}>{text}</h5>;
  if (parseInt(numH) === 6) return <h6 className={className}>{text}</h6>;

  return false;
};

export default H1text;
