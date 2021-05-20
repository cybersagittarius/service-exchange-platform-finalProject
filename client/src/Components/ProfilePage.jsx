import React from "react";
import ProfileHeader from "./ProfileHeader";
import Card from "./Card";
import Footer from "./Footer";
import '../styles/scss/Profile.scss'

//npm install react-router-dom

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = () => {
    return (
        <Router>
            <div className="wrapper">
                <ProfileHeader />
                <div className="app_body">
                    <Card />

                </div>
            </div>
            <Footer />
        </Router>
    );
};

export default ProfilePage;