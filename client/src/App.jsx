//npm install --save react-background-slideshow
//npm install node-sass --save

//Sebastian was here

import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
//npm install react-router-dom
import Login from "./Components/userAccount/Login";
import Register from "./Components/userAccount/Register";
import ResetPW from "./Components/userAccount/ResetPW";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

 const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Main />       
        <About />
        <Team />
        <Footer />
      </div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reset_password" component={ResetPW} />
      </Switch>
    </Router>
  );
};

export default App;
