//npm install --save react-background-slideshow
//npm install node-sass --save
import React from "react";
// import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Team from "./Team";
//npm install react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";

import Test from './Test'
import Logout from "./userControl/Logout";

const LandingPage = () => {
    return (
        <>
            <div className="wrapper">
                {/* <Header /> */}
                <Main />
                <Test />
                <Logout />
                <About />
                <Team />
             </div>
           
        </>
    );
};

export default LandingPage;
