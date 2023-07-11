import React, { Fragment, useEffect } from "react";
import { connect, useSelector, useDispatch } from 'react-redux';
import { RootReducerState } from '../../reducers';
import getPlayersDetails from '../../actions/GetPlayerDetails.Action';
//import Navbar from "../Navbar";
import DisplayDetails from "../DisplayDetails/DisplayDetails";
import getFoodMenuDetailsOnSearch from "../../actions/GetFoodMenu";

type LandingPageProps ={
   decodedString : string,
   params : string
}
const LandingPage : React.FunctionComponent = (props : any) =>{
    const dispatch = useDispatch();
    
    useEffect (()=>{
      const request : any = {

      }
      //dispatch(getPlayersDetails(request));
      dispatch(getFoodMenuDetailsOnSearch(request))
  },[])
    return (
       <Fragment>
        {/* <Navbar /> */}
        <DisplayDetails />

       </Fragment>
    );
}
const mapStateToProps = (state : any) =>{
   return {
      getPlayersDetails: state.getPlayersDetails,
      getFoodMenuDetailsOnSearch : state.getFoodMenuDetailsOnSearch.data
   }
}
const mapDispatchToProps = (dispatch : any ) =>{
   return {
      getPlayersDetails : (data : any ) =>dispatch(getPlayersDetails(data)),
      getFoodMenuDetailsOnSearch : (data:any) =>dispatch(getFoodMenuDetailsOnSearch(data))
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(LandingPage);