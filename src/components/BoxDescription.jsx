import React from "react";
import { Avatar, Dashboard, Details, Ptext } from ".";
const BoxDescription = ({
  className,
  fullName,
  userName,
  createdDate,
  infoUser,
  repos,
  followers,
  following,
  location,
  web,
  twitter,
  company,
  src,
  alt
}) => {
  return (
    <section className={className}>
      <Avatar
        fullName={fullName}
        userName={userName}
        createdDate={createdDate}
        src={src}
        alt={alt}
      />
      <div className="Content__div-info">
        <Ptext className="Content__info" text={infoUser} />
      </div>
      <Dashboard
        repos={repos}
        followers={followers}
        following={following}
        className="Content__dashboard"
      />
      <div className="Content__details">
        <div className="Content__details-items">
          <Details icon="fas fa-map-marker-alt" text={location} />
          <Details icon="fas fa-link" text={web} />
        </div>
        <div>
          <Details icon="fab fa-twitter" text={twitter} />
          <Details icon="fas fa-building" text={company} />
        </div>
      </div>
    </section>
  );
};
export default BoxDescription;
