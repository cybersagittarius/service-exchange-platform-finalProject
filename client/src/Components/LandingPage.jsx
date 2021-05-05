//npm install --save react-background-slideshow
//npm install node-sass --save

import React from "react";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Team from "./Team";
import Footer from "./Footer";
//npm install react-router-dom
import Login from "./userAccount/Login";
import Register from "./userAccount/Register";
import ResetPW from "./userAccount/ResetPW";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <Main />
                <About />
                <Team />
                <Footer />
            </div>
            <Switch>
                <Route exact path="/landing_page/login" component={Login} />
                <Route exact path="/landing_page/register" component={Register} />
                <Route exact path="/landing_page/reset_password" component={ResetPW} />
            </Switch>
        </>
    );
};

export default LandingPage;
