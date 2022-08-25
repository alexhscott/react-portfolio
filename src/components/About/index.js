import React from "react";
import profileImage from "../../assets/large/Profile/profile-pic.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hi there and welcome to my portfolio! My name is Alex Scott and I am
            a United States Marine Corps Veteran as a Military Working Dog Handler. 
            I am 30 years old, origionally from the Bay Area in California, but 
            currently residing in Austin, Tx. I graduated with a B.A. in Criminal 
            Justice with a concentration in Law Enforcement from St. Edward's 
            University, but am looking to make a career change! Please browse around 
            my page and take a look at some projects that I have completed or even 
            contact me!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;