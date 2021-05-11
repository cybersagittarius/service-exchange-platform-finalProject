//npm install --save react-background-slideshow
//npm install node-sass --save

import React from "react";
import Header from "./Header";
import About from "./About";
import Team from "./Team";
//npm install react-router-dom


import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
    return (
        
            <div className="wrapper">
                <Header />
                <About />
                <Team />
               
            </div>
    
    );
};

export default LandingPage;
