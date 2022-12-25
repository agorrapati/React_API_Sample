import  React, { Fragment }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './components/LandingPage/LoginPage';

function AppRoutes(){
    return (
        <Fragment >
            <Router>
                <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/landing" element={<LandingPage/>} />

                </Routes>
            </Router>
        </Fragment>
        
    )

}
export default AppRoutes; 