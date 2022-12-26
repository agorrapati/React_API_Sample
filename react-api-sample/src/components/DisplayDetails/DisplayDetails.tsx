import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerState } from '../../reducers';

const DisplayDetails = (props:any) =>{
    const dispatch = useDispatch();
    return (
       <Fragment>
            <div className="modal fade d-block show" id="userLogin" aria-modal="true" data-keyboard="false">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Details</h4>
                        </div>
                        <div className="modal-body">
                        
                            <table>
                                <thead>
                                    <tr>
                                    <th>COLOUM1</th>
                                    <th>COLOUM2</th>
                                    <th>COLOUM3</th>
                                    <th>COLOUM4</th>
                                    </tr>
                                    

                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <div className="col-xs-6">

                            </div>
                            <div className="col-xs-6">
                                <a href="javascript:void(0);" className="btn-base bg-danger text-white" data-dismiss="modal" onClick={()=>props.closePopUp()}>Close</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </Fragment>
    )
}

export default DisplayDetails;