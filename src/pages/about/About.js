import React from "react";
import "./about.css";
import pIn from "../../assets/pin.png";
import bgPic from "../../assets/astro.png";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Bounce from "react-reveal/Bounce";

function About() {
  return (
    <div className="about">
      <div className="imgcontainer">
        <Fade left big>
          <img src={bgPic} alt="" />
        </Fade>
      </div>
      <Roll left>
        <div className="container">
          <div className="aboutcontent">
            <h2>
              <div className="imgbb">
                <div className="imgback">
                  <Bounce top>
                    <img src={pIn} alt="" />
                  </Bounce>
                </div>
              </div>
              WHO ARE WE
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              dolorem voluptates officiis, recusandae unde nobis consectetur
              voluptas laboriosam! Ducimus nam dolorem in, repellat quae eum,
              fugiat cupiditate hic voluptatum eveniet vitae ipsam reiciendis.
              Quaerat corporis dignissimos facilis, nemo eligendi optio
              blanditiis ratione illum dolores ea non debitis doloremque tempore
              perspiciatis.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quod dolorem voluptates officiis, recusandae unde nobis
              consectetur voluptas laboriosam! Ducimus nam dolorem in, repellat
              quae eum, fugiat cupiditate hic voluptatum eveniet vitae ipsam
              reiciendis. Quaerat corporis dignissimos facilis, nemo eligendi
              optio blanditiis ratione illum dolores ea non debitis doloremque
              tempore perspiciatis.Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
      </Roll>
      <Roll right>
        <div className="container2">
          <div className="aboutcontent2">
            <div className="imgbb1">
              <div className="imgback1">
                <Bounce top>
                  {" "}
                  <img src={pIn} alt="" />
                </Bounce>
              </div>
            </div>
            <h2>OUR SERVICES</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              dolorem voluptates officiis, recusandae unde nobis consectetur
              voluptas laboriosam! Ducimus nam dolorem in, repellat quae eum,
              fugiat cupiditate hic voluptatum eveniet vitae ipsam reiciendis.
              Quaerat corporis dignissimos facilis, nemo eligendi optio
              blanditiis ratione illum dolores ea non debitis doloremque tempore
              perspiciatis.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quod dolorem voluptates officiis, recusandae unde nobis
              consectetur voluptas laboriosam! Ducimus nam dolorem in, repellat
              quae eum, fugiat cupiditate hic voluptatum eveniet vitae ipsam
              reiciendis. Quaerat corporis dignissimos facilis, nemo eligendi
              optio blanditiis ratione illum dolores ea non debitis doloremque
              tempore perspiciatis.Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
      </Roll>
    </div>
  );
}

export default About;
