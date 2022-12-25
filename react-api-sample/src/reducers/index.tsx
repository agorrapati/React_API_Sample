import { combineReducers } from 'redux';
import GetPlayersDetails from './GetPlayerDetails.Reducer';

const rootReducer = combineReducers({
    getPlayersDetails:GetPlayersDetails
});
export type RootReducerState = ReturnType<typeof rootReducer>;
export default rootReducer;