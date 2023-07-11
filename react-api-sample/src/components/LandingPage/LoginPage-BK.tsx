import React, { Fragment, useEffect, useState } from "react";
import { connect , useSelector, useDispatch } from 'react-redux';
import { RootReducerState } from '../../reducers';
import DisplayDetails from '../DisplayDetails/DisplayDetails'
//import getPlayersDetails from '../../actions/GetPlayerDetails.Action';
 const LoginPage = (e:any) =>{
     const dispatch = useDispatch();
    const [isSuccess,setIsSuccess] =useState(false);
     const handleClickEvent = (e:any) =>{
       
        const request = {
            
            
        }
        //dispatch(getPlayersDetails(request));
        setIsSuccess(true);
     }

     const closePopUp = (e:any) =>{
        setIsSuccess(false);
    }

     
     return (
        <Fragment>
        <div className="modal fade d-block show" id="userLogin" aria-modal="true" data-keyboard="false">
            <div className="modal-dialog ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title bg-blue300"><label className="text-danger">Login</label></h4>
                    </div>
                    <div className="modal-body">
                        <div className="row ">
                            <label className="col-xs-3">User Name</label>
                            <div className="col-xs-9">
                                <input type="text" name="userId" className="cdl-input" placeholder="User Id" defaultValue="agorrapa"data-testId="username" />
                            </div>
                        </div>
                        <div className="row">
                        <label className="col-xs-3">Password</label>
                        <div className="col-xs-9">
                            <input type="password" name="password" className="cdl-input" placeholder="Password" defaultValue="********"data-testId="username" />
                        </div>
                        </div>
                    </div>
                    <div className="modal-footer mt-3">
                        <div className="col-xs-4 d-none"></div>
                        <div className="col-xs-4 text-center"></div>
                        <div className="col-xs-4 text-right">
                            <a type="button" onClick={(e)=>handleClickEvent(e)}> Submit </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        {isSuccess ? <DisplayDetails closePopUp={closePopUp}/>:""}
   </Fragment>
     )

    
 }
// function LoginPage(){
//     return(
//     <Fragment>
//         <main className="app-content container p-1" id="mainContainer">
//             <div className="modal-dialog ">
//                 <button type="button">
//                     Save
//                 </button>
//             </div>
//         </main>
//     </Fragment>
//     )
// }

export default connect() (LoginPage);