//npm install node-sass --save
import React from "react";
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

//npm install react-router-dom

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default ProfilePage;
