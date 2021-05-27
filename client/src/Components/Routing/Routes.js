import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchProvider from '../../context/SearchProvider';
import LandingPage from '../LandingPage';
import LoginPage from '../userControl/Login';
import RegisterPage from '../userControl/Register';
import ContactPage from '../Contact';
import VisitorsPage from '../Visitors';
import NotFoundPage from '../NotFound'
import Footer from '../Footer'
import Header from '../Header'
import SearchPage from '../Search';
import ForgetPWPage from '../userControl/ForgetPW';
import PwResetPage from '../userControl/PwReset_copy';
import ChatPage from '../chat/Chat';


const Routes = () => ( 
    <SearchProvider> 
        <Router>
        <Header/>
                <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/register" exact component={RegisterPage}/>
                <Route path="/forget_password" exact component={ForgetPWPage}/>
                <Route path="/reset_password/:token" exact component={PwResetPage}/> 
                <Route path="/contact" exact component={ContactPage}/>
                <Route path="/visitors" exact component={VisitorsPage}/>
                <Route path="/not_found" exact component={NotFoundPage}/>
                <Route path="/search" exact component={SearchPage}/>
                <Route path="/chat" exact component={ChatPage} />
            </Switch>            
            <Footer/>
        </Router>
    </SearchProvider>
)
export default Routes

