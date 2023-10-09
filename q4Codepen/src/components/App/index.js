import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PageNotFound from '../PageNotFound';

import '../../css/App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Header from '../Header';
import Footer from '../Footer';
import FAQ from '../FAQ';
import Content from '../Content';

import * as ROUTES from '../../constants/routes';
import {withAuthentication, AuthUserContext} from '../../contexts/withAuthentication';

const App = () => {
    const authUser = useContext(AuthUserContext)
    let pageContent = authUser ? <LoggedInTrue user= {authUser}/>: <LoggedInFalse user= {authUser}/>;
    return pageContent;
}

const LoggedInTrue = () => (
    <div>
        <Header/>
        <div className="App">
            <Switch>
                <Route exact path={ROUTES.HOME} component={Content}/>
                <Route exact path={ROUTES.FAQ} component={FAQ}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
        <Footer/>
    </div>
);

const LoggedInFalse = () => (
    <div>
        <Header/>
        <div className="App">
            <Switch>
                <Route path={ROUTES.HOME} component={FAQ}/>
            </Switch>
        </div>
        <Footer/>
    </div>
);
export default withAuthentication(App);
