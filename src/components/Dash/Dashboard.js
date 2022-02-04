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
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "0px 10px" }} className="ui card">
          <div className="content">
            <div className="header">Project Timeline</div>
          </div>
          <div className="content">
            <h4 className="ui sub header">Activity</h4>
            <div className="ui small feed">
              <div className="event">
                <div className="content">
                  <div className="summary">
                    Lorem ipsum dolor sit lorem ipsum.
                  </div>
                </div>
              </div>
              <div className="event">
                <div className="content">
                  <div className="summary">
                    <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
                  </div>
                </div>
              </div>
              <div className="event">
                <div className="content">
                  <div className="summary">
                    <a>Helen Troy</a> added two pictures
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="extra content">
            <button className="ui blue button">Start Project</button>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <div className="header">Dashboard</div>
            <div className="description">
              You can add new Dashboard from here.
            </div>
          </div>
          <div className="positive ui button my-4">
            <i className="add icon"></i>
            Create Dashboard
          </div>
          <hr />
          <div style={{ margin: "10px 0px" }} className="content">
            <div className="header">Elliot Fu</div>
            <div className="description">
              Elliot Fu is a film-maker from New York.
            </div>
          </div>
          <div
            style={{ backgroundColor: "#1f669b", color: "white" }}
            className="ui bottom attached button"
          >
            <i className="add icon"></i>
            Add User
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;
