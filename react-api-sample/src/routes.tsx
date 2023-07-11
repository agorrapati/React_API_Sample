import  React, { Fragment }  from 'react';
import { BrowserRouter as Router, Route, Switch , BrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
//import LoginPage from './components/LandingPage/LoginPage-BK';
import LoginPage from './components/LandingPage/LoginPage';
import LoginFormPage from './components/LandingPage/LoginFormPage';
const Routes : React.FunctionComponent =() =>{
    return (
        <BrowserRouter >
            <Switch>
                
                <Route path="/" component={LoginPage} />
                <Route path="/landing" component={LandingPage} />
                <Route path="/login" component={LoginFormPage} />
                
            </Switch>
        </BrowserRouter>
        
    )

}
export default Routes; 