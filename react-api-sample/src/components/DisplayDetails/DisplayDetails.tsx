import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerState } from '../../reducers';

const DisplayDetails = () =>{
    const dispatch = useDispatch();
    return (
       <Fragment>
            <div className="modal fade d-block show" id="userLogin" aria-modal="true" data-keyboard="false">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-tile">Details</h4>
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
                    </div>
                </div>
            </div>
       </Fragment>
    )
}

export default DisplayDetails;