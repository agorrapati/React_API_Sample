import React  from "react";
import { useDispatch } from 'react-redux';
import LandingPage from "./LandingPage";
//import getPlayersDetails from '../../actions/GetPlayerDetails.Action';
 const LoginPage = (e:any) =>{
     const dispatch = useDispatch();
     return (
        <LandingPage />
    )
 }

export default LoginPage;