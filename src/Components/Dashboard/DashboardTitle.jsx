import React from "react";

const DashboardTitle = ({ title }) => {
  return (
    <div>
      <h2 className="text-3xl font-luckiest text-accent">{title}</h2>
      <p className="text-xl font-semibold font-nunito">
        Welcome To Note Nexus {title} page
      </p>
    </div>
  );
};

export default DashboardTitle;
