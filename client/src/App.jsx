//npm install --save react-background-slideshow
//npm install node-sass --save
import React from "react";
import MainRouter from './hoc/MainRouter';
//npm install react-router-dom
import Login from "./Components/userAccount/Login";
import Register from "./Components/userAccount/Register";
import ResetPW from "./Components/userAccount/ResetPW";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchProvider } from './Components/context/SearchContext';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
    <SearchProvider>
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
    </SearchProvider>
    <div>
      <MainRouter></MainRouter>
    </div>
    </>
  );
};

export default App;
