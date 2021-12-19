import React from "react";
import "../styles/Loading.scss";
const Loading = ({ className }) => {
  return (
    <div className={className}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};
export default Loading;
