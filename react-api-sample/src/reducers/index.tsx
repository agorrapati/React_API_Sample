import { combineReducers } from 'redux';

//import get from './GetPlayerDetails.Reducer';
import getFoodMenuDetailsOnSearch from './GetFoodMenuDetails.Reducer';
import getPlayersDetails from './GetPlayerDetails.Reducer';
const rootReducer = combineReducers({
  getPlayersDetails:getPlayersDetails,
  getFoodMenuDetailsOnSearch : getFoodMenuDetailsOnSearch

});
export type RootReducerState = ReturnType<typeof rootReducer>;
export default rootReducer;