import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
//import { RootReducerState } from '../../reducers';

const LandingPage = () =>{
    const dispatch = useDispatch();
    return (
       <Fragment>
            <div className="modal fade d-block show" id="userLogin" aria-modal="true" data-keyboard="false">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-tile">Login</h4>
                        </div>
                    </div>
                </div>
            </div>
       </Fragment>
    )
}

export default LandingPage;