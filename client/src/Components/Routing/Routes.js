import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchProvider from '../../context/SearchProvider';
import MainPage from '../Main'
import LandingPage from '../LandingPage';
import LoginPage from '../userControl/Login';
import RegisterPage from '../userControl/Register';
import ContactPage from '../Contact';
import VisitorsPage from '../Visitors';
import NotFound from '../NotFound';
import Footer from '../Footer';
import Header from '../Header';
import ProfilePage from '../ProfilePage';
import ForgetPW from '../userControl/ForgetPW';
import PwReset from '../userControl/PwReset_copy';


const Routes = () => ( 
    <SearchProvider> 
        <Router>
            <Header/>
                {/* <MainPage/> */}
                <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/register" exact component={RegisterPage}/>
                <Route path="/forget_password" exact component={ForgetPW}/>
                <Route path="/reset_password/:token" exact component={PwReset}/> 
                <Route path="/contact" exact component={ContactPage}/>
                <Route path="/profile" component={ProfilePage}/>           
                <Route path="/visitors" exact component={VisitorsPage}/>
                {/* <Route path="/change_details" exact component={ChangeDetails}/> */}
                <Route component={NotFound}/>
            </Switch>            
            <Footer/>
        </Router>
    </SearchProvider>
)
export default Routes

