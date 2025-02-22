import React from "react";
import "./intro.css";
import GowthamProfile from "../../assets/Gowtham-Profile3.png";
import { Link } from "react-scroll";
import HireMe from "../../assets/hireme.png";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Gowtham</span>
          <br />
          Web Developer
        </span>
        <p className="introPara">
          I am a skilled Web Developer with experience in visually appealing and
          User-friendly Websites.
        </p>
        <Link>
          <button className="btn">
            <img src={HireMe} alt="HireMe-btn" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      {/* <img src={GowthamProfile} alt="GowthamProfile" className="g-bg" /> */}
    </section>
  );
}

export default Intro;
