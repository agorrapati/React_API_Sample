import React, { Fragment, useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from 'react-redux';
import { RootReducerState } from '../../reducers';
import getPlayersDetails from "../../actions/GetPlayerDetails.Action";
import getFoodMenuDetailsOnSearch from "../../actions/GetFoodMenu";


const DisplayDetails = (props: any) => {
    const dispatch = useDispatch();
    const playerData = useSelector((state:RootReducerState) => (state.getPlayersDetails.data));
    const [ playerDetails,setPlayerDetails ]= useState([] as any); 
    
    const menuList = useSelector((state:RootReducerState)=>(state.getFoodMenuDetailsOnSearch.data))
    const [menuListObj , setMenuListObj] = useState([] as any)

    
    
    console.log('menuLIst' , menuList)
    console.log('playerDetails',playerDetails)
    return (
        <Fragment>
            <main>
                <div className="container">

                
                <div className="detail-content-section">

                    {/* <table className="table basic-table text-center">
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>City</th>
                            <th>Division</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                    {playerDetails!==undefined && playerDetails.length>0 && playerDetails.map((item:any)=>(
                        <tr>
                            <td>{item.first_name} &nbsp; {item.last_name}</td>
                            <td>{item.team.city}</td>
                            <td>{item.team.division}</td>
                            <td> {item.position} </td>
                        </tr>
                    ))}
                    </tbody>
                </table> */}

                <div className="row">
                    <div className="col-xs-10">

                    </div>
                   
                </div>
            </div>
            </div>
              
            </main>
        </Fragment>
    )
}

export default connect() (DisplayDetails)