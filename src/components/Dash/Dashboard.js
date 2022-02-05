import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard__heading">Dashboard</div>
      <div className="dashboard__container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="dashboard__card1">2 employee</div>
          <div className="dashboard__card2">2 employee</div>
          <div className="dashboard__card3">5 projects</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="dashboard__card4">2 employee</div>
          <div className="dashboard__card5">2 employee</div>
          <div className="dashboard__card6">5 projects</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
