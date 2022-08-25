import React from "react";
import passwordGenerator from "../../assets/small/password-generator.png";
import workDayScheduler from "../../assets/small/workday-scheduler.png";
import weatherDashboard from "../../assets/small/weather-dashboard.png";
import noteTaker from "../../assets/small/note-taker.png";
import budgetTracker from "../../assets/small/budget-tracker.png";


function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Projects</h2>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://rocky-caverns-24754.herokuapp.com/">
                {" "}
                <img
                  src={budgetTracker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="BudgetTracker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Budget Tracker</h4>
              <p>
                This budget tracker lets the user visually see and track their 
                current budget. The user can add or subtract funds by entering 
                a transaction name and amount. Once the user adds or subtracts 
                funds, a transaction history will be documented, as well as a 
                current balance.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://stark-tundra-21699.herokuapp.com/">
                {" "}
                <img
                  src={noteTaker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note_Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
                This note taker allows the user to create a note that includes 
                a title and body for which notes can be written. The user may 
                save, edit, or delete the note that they created.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://alexhscott.github.io/weather-dashboard/">
                {" "}
                <img
                  src={weatherDashboard}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                This weather dashboard allows the user to search a city and see 
                the current weather for that city. Additionally, a 5-day forecast 
                will be included for the user as well. Various stats about the 
                weather (temperature, humidity, wind speed, UV index) will be 
                displayed.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://alexhscott.github.io/work-day-scheduler/">
                {" "}
                <img
                  src={workDayScheduler}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="WorkDayScheduler"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Work Day Scheduler</h4>
              <p>
                This scheduler allows the user to type in their daily schedule 
                from normal business hours (9am - 6pm). The user can add and 
                save notes as their work day gets filled up to have a better 
                understanding how their day might look.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://alexhscott.github.io/password-generator/">
                {" "}
                <img
                  src={passwordGenerator}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="PasswordGenerator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
                This password generator allows any user to answer a series a series
                of questions of the user's preference regarding the length of the 
                password, capital letters, numbers, and special characters. Once the 
                user answers the series of questions, a random password will be 
                populated for the user to have.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;