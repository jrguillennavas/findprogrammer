import React from "react";
import '../styles/Dashboard.scss'
import { Ptext } from ".";
const Dashboard = ({ repos, followers, following, className }) => {
  return (
    <div className={`Dashboard ${className}`}>
      <div className="Dashboard_items">
        <Ptext text="Repos" />
        <Ptext className="Dashboard_item-value" text={repos} />
      </div>
      <div className="Dashboard_items">
        <Ptext text="Followers" />
        <Ptext className="Dashboard_item-value" text={followers} />
      </div>
      <div className="Dashboard_items">
        <Ptext text="Following" />
        <Ptext className="Dashboard_item-value" text={following} />
      </div>
    </div>
  );
};
export default Dashboard;
