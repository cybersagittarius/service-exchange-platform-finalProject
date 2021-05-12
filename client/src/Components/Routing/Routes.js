import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SearchProvider from '../../context/SearchProvider';
import HeaderPage from '../Header';
// import MainPage from '../Main';
import LandingPage from '../LandingPage';
import LoginPage from '../userAccount/Login';
import ResetPassword from '../userAccount/ResetPW';
import RegisterPage from '../userAccount/Register';
import ContactPage from '../Contact';
import FooterPage from '../Footer';
import VisitorPage from '../Visitor';
import NotFoundPage from '../NotFound';



const Routes = () => (
    <SearchProvider>
        <Router>
        {/* <MainPage/> */}
            <Switch>
<Route  path="/" exact component={LandingPage}/>
<Route  path="/login" exact component={LoginPage}/>
<Route  path="/reset_password" exact component={ResetPassword}/>
<Route  path="/register" exact component={RegisterPage}/>
<Route  path="/contact" exact component={ContactPage}/>
<Route  path="/visitor" exact component={VisitorPage}/>
<Route component={NotFoundPage}/>
            </Switch>
        <HeaderPage/>
        <FooterPage/>
        </Router>
    </SearchProvider>
    )


export default Routes
