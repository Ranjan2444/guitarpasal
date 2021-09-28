import React from "react";
import bgPic from "../../assets/astro.png";
import "./home.css";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-banner">
        <Fade left big>
          <img src={bgPic} alt="" />
        </Fade>
      </div>
      <div className="home-text">
        <Fade top>
          <h1>Need a Guitar?</h1>
        </Fade>
        <h2>Take a look</h2>

        <Link to="/store">
          <Jump>
            <button>Lets Go!</button>
          </Jump>
        </Link>
      </div>
    </div>
  );
}

export default Home;
