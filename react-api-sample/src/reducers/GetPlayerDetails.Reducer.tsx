import * as ACTION_TYPES from '../actions/action-types';

const initialState = {
    stage : "initial",
    isLoading : false,
    hasError : false,
    data : {},
    err : null
}

const getPlayersDetails = (state = initialState , action:any) =>{
    switch(action.type){
        case ACTION_TYPES.GET_PLAYER_DETAILS_REQUEST:
            return { ...state ,stage:"request", isLoading:true, hasError:false, data:null, err:null }
        case ACTION_TYPES.GET_PLAYER_DETAILS_SUCCESS:
            if(typeof action.payload === "undefined"){
                return { ...state ,stage:"success", isLoading:false, hasError:false, err:null }
            }
            let allData = action.payload;
            return { ...state ,stage:"success", isLoading:false, hasError:false, data:allData, err:null }
        case ACTION_TYPES.GET_PLAYER_DETAILS_REQUEST:
            return { ...state ,stage:"error", isLoading:false, hasError:true, err:action.payload }
        
        default:
            return state;
    }
}

export default getPlayersDetails;