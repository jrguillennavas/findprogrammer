import React from "react";
import { H1text, Ptext } from ".";
import '../styles/Avatar.scss'
const Avatar = ({ src, alt, fullName, userName, createdDate }) => {
  return (
    <div className="Avatar">
      <img className="Avatar_img" src={src} alt={alt} />
      <div className="Avatar__content">
        <div className="Avatar__descrip">
          <H1text  text={fullName} numH={2} />
          <Ptext className="Avatar__username" text={`@${userName}`} />
        </div>
        <Ptext text={createdDate} />
      </div>
    </div>
  );
};
export default Avatar;
