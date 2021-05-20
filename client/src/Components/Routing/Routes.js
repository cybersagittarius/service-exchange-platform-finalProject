import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import SearchProvider from '../../context/SearchProvider';
import LandingPage from '../LandingPage';
import LoginPage from '../userAccount/Login';
import RegisterPage from '../userAccount/Register';
import ContactPage from '../Contact';
import VisitorsPage from '../Visitors';
import NotFound from '../NotFound';
import Footer from '../Footer';
import Header from '../Header';
import ProfilePage from '../ProfilePage';
import ChangeDetails from '../ChangeDetails';


const Routes = () => ( 
    <SearchProvider> 
        <Router>
                <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/register" exact component={RegisterPage}/>
                <Route path="/contact" exact component={ContactPage}/>
                <PrivateRoute path="/profile" exact component={ProfilePage}/>
                <Route path="/visitors" exact component={VisitorsPage}/>
                <Route path="/ChangeDetails" exact component={ChangeDetails}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </Router>
    </SearchProvider>
)
export default Routes

