import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerState } from '../../reducers';
import getPlayersDetails from '../../actions/GetPlayerDetails.Action';
import Navbar from "../Navbar";

const LandingPage = () =>{
    const dispatch = useDispatch();
    return (
       <Fragment>
        {<Navbar />}
            {/* <div className="header appheader m-0" >
               Sports API 
            </div> */}
       </Fragment>
    )
}
 
export default LandingPage;