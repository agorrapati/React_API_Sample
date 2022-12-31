import  React, { Fragment }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
//import LoginPage from './components/LandingPage/LoginPage-BK';
import LoginPage from './components/LandingPage/LoginPage';
import LoginFormPage from './components/LandingPage/LoginFormPage';
function AppRoutes(){
    return (
        <Fragment >
            <Router>
                <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/landing" element={<LandingPage/>} />
                <Route path="/login" element={<LoginFormPage />} />
                </Routes>
            </Router>
        </Fragment>
        
    )

}
export default AppRoutes; 