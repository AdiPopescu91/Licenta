import { combineReducers } from 'redux';
import reduxReducer from "../views/Redux/counterReducer";
import reduxTestReducer from "../views/ReduxTest/reducer";
export default combineReducers({
   counter: reduxReducer,
   create: reduxTestReducer,

});