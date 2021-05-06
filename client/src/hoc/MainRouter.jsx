import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from '../Components/LandingPage';
import ProfilePage from '../Components/ProfilePage/Profile';
import PrivateRoute from './PrivateRoute/PrivateRoute';


export default function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" >
                    <Redirect to="/landing_page" />
                </Route>
                <Route path="/landing_page" component={LandingPage}></Route>
                <PrivateRoute path="/profile" component={ProfilePage}></PrivateRoute>
            </Switch>
        </Router>
    )
}
