import React, { Fragment, useEffect, useState } from "react";
import { connect , useSelector, useDispatch } from 'react-redux';
import { RootReducerState } from '../../reducers';
import DisplayDetails from '../DisplayDetails/DisplayDetails'
import LandingPage from "./LandingPage";
//import getPlayersDetails from '../../actions/GetPlayerDetails.Action';
 const LoginPage = (e:any) =>{
     const dispatch = useDispatch();
     return (
        <LandingPage />
    )
 }

export default connect() (LoginPage);