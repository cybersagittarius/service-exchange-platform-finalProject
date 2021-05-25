import React from "react";
import { Link } from "react-router-dom";
// import bg from '../assets/images/bg.jpg'
// import Logo from "../assets/images/two-way-cross.png";

import BackgroundSlideshow from "react-background-slideshow";
import Image2 from "../assets/images/priscilla-du-preez.jpg";
import Image3 from "../assets/images/heylagostechie.jpg";
import Image4 from "../assets/images/alexis-brown-omea.jpg";

function Main() {
  return (
    <>
    {/* style={{ backgroundImage: `url(${bg})` }} */}
    <div id="home" >
      <div className="slightContainer"  >
    <BackgroundSlideshow
      images={[Image2, Image3, Image4]}/>
      <div >
        <main className="main" >
            
            {/* <span className="logoLarge">
            <i class="fab fa-staylinked fa-5x"></i>
            </span>
            <span className="logoSmall">
            <i class="fab fa-staylinked fa-3x"></i>
            </span> */}

            <h1>
            Two Way Street
           </h1>

          <p>Service Exchange Platform - get new skills for FREE!!</p>
          <button
            className="btnJoinFind"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link to="/register"> Join </Link>
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
