import React from "react";
import Logo from "./img/two-way-cross.png";
import { Link } from "react-router-dom";

import BackgroundSlideshow from "react-background-slideshow";
import Image2 from "./img/priscilla-du-preez.jpg";
import Image3 from "./img/heylagostechie.jpg";
import Image4 from "./img/alexis-brown-omea.jpg";

function Main() {
  return (
    <>
    <div id="home">
      <div className="slightContainer">
    <BackgroundSlideshow
      images={[Image2, Image3, Image4]}/>
      <div>
        <main className="main">
          <h1>
            Two
            <span>
              <img src={Logo} className="logo" alt="" />
            </span>
            Way Street
          </h1>
          <p>Service Exchange Platform - get new skills for FREE!!</p>
          <button
            className="btnJoinFind"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link to="/login"> Join </Link>
          </button>
        </main>
      </div>
    </div>
    </div>
     <div className="arrow">
     <span></span>
     <span></span>
     <span></span>
   <p>Scroll down to see more</p>
</div>
</>
  );
}

export default Main;
