import React, { Fragment, useEffect } from "react";
import { connect, useSelector, useDispatch } from 'react-redux';
import { RootReducerState } from '../../reducers';
import getPlayersDetails from '../../actions/GetPlayerDetails.Action';
import Navbar from "../Navbar";
import DisplayDetails from "../DisplayDetails/DisplayDetails";


const LandingPage = () =>{
    const dispatch = useDispatch();
    const playerData = useSelector((state:RootReducerState) => (state.getPlayersDetails.data));
    useEffect (()=>{
        const request : any = {

        }
        dispatch(getPlayersDetails(request));
    })
    return (
       <Fragment>
        <Navbar />
        <DisplayDetails />

       </Fragment>
    )
}
const mapStateToProps = (state : any) =>{
   return {
      getPlayersDetails: state.getPlayersDetails
   }
}
const mapDispatchToProps = (dispatch : any ) =>{
   return {
      getPlayersDetails : (data : any ) =>dispatch(getPlayersDetails(data))
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(LandingPage);