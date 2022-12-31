import * as ACTION_TYPES from './action-types';
import * as CONSTANTS from '../utils/Constants'
const axios = require('axios');
const rax = require('retry-axios');

export const playerDetails_request = (data: any)=>{
    return {
        type: ACTION_TYPES.GET_PLAYER_DETAILS_REQUEST,
        payload : data
    }
}

export const playerDetails_success = (obj: any)=>{
    return {
        type: ACTION_TYPES.GET_PLAYER_DETAILS_SUCCESS,
        payload : obj
    }
}

export const playerDetails_failure = (err: any)=>{
    return {
        type: ACTION_TYPES.GET_PLAYER_DETAILS_FAILURE,
        payload : err
    }
}
export default function getPlayersDetails(data:any){
    return async function (dispatch:any)   {
        dispatch(playerDetails_request(data));
        try{
            axios.defaults.withCredentials = true;
            const interceptorId = rax.attach();
            const response = await axios ({
                url:CONSTANTS.PLAYER_DETAILS,
                method:'GET',
                params: {page: '0', per_page: '25'},
                headers: CONSTANTS.header,
                //data:()

            });
            var resp: any = null;
            if(response !==null && response.status === 200){
                resp = response;
                console.log(resp);
                dispatch(playerDetails_success(resp));
            }else{
                dispatch(playerDetails_failure(resp));
            }
        }catch(error){
            console.log("ERROR");
            dispatch(playerDetails_failure("ERROR"))
        }
    }   
}

type Action = ReturnType<typeof playerDetails_request | typeof playerDetails_success | typeof playerDetails_failure | typeof getPlayersDetails> ;