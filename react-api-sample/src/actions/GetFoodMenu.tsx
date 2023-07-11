import * as ACTION_TYPES from './action-types';
import * as CONSTANTS from '../utils/Constants'
const axios = require('axios');
const rax = require('retry-axios');

export const foodmenusearch_request = (data: any)=>{
    return {
        type: ACTION_TYPES.GET_PLAYER_DETAILS_REQUEST,
        payload : data
    }
}

export const foodmenusearch_success = (obj: any)=>{
    return {
        type: ACTION_TYPES.GET_PLAYER_DETAILS_SUCCESS,
        payload : obj
    }
}

export const foodmenusearch_failure = (err: any)=>{
    return {
        type: ACTION_TYPES.GET_PLAYER_DETAILS_FAILURE,
        payload : err
    }
}
export default function getFoodMenuDetailsOnSearch(data:any){
    return async function (dispatch:any)   {
        dispatch(foodmenusearch_request(data));
        try{
            axios.defaults.withCredentials = true;
            const interceptorId = rax.attach();
            const response = await axios ({
                url:CONSTANTS.FOOD_MENU_SEARCH,
                method:'GET',
                //params: {page: '0', per_page: '25'},
                headers: CONSTANTS.header,
                //data:()

            });
            var resp: any = null;
            if(response !==null && response.status === 200){
                resp = response;
              //  console.log(resp);
                dispatch(foodmenusearch_success(resp));
            }else{
                dispatch(foodmenusearch_failure(resp));
            }
        }catch(error){
            console.log("ERROR");
            dispatch(foodmenusearch_failure("ERROR"))
        }
    }   
}

type Action = ReturnType<typeof foodmenusearch_request | typeof foodmenusearch_success | typeof foodmenusearch_failure | typeof getFoodMenuDetailsOnSearch> ;