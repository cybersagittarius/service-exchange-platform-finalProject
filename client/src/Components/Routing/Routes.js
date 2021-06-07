import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchProvider from "../../context/SearchProvider";
import Main from "../Main";
import LandingPage from "../LandingPage";
import LoginPage from "../userControl/Login";
import RegisterPage from "../userControl/Register";
import ContactPage from "../Contact";
import SearchPage from "../Search";
import ForgetPWPage from "../userControl/ForgetPW";
import PwResetPage from "../userControl/PwReset_copy";
import ChatPage from "../chat/Chat";
import NotFound from "../NotFound";
import Footer from "../Footer";
import Header from "../Header";
import ProfilePage from "../ProfilePage";

const Routes = () => (
  <SearchProvider>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/forget_password" exact component={ForgetPWPage} />
        <Route path="/reset_password/:token" exact component={PwResetPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/search" exact component={SearchPage} />
        <Route path="/chat" exact component={ChatPage} />
        <Route path="/profile" component={ProfilePage} />
        {/* <Route path="/change_details" exact component={ChangeDetails}/> */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  </SearchProvider>
);
export default Routes;
