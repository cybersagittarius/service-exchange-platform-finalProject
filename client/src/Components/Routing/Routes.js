import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchProvider from '../../context/SearchProvider';
import LandingPage from '../LandingPage'
import MainPage from '../Main';
import Header from '../Header';
import LoginPage from '../userAccount/Login';
import RegisterPage from '../userAccount/Register';
import ContactPage from '../Contact';
import VisitorsPage from '../Visitors';
import NotFound from '../NotFound'
import Footer from '../Footer'


const Routes = () => ( 
    <SearchProvider> 
        <Router>
            
                <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/register" exact component={RegisterPage}/>
                <Route path="/contact" exact component={ContactPage}/>
                <Route path="/visitors" exact component={VisitorsPage}/>
                <Route component={NotFound}/>
            </Switch>
            <Header/>
            <Footer/>
        </Router>
    </SearchProvider>
)
export default Routes

