import { combineReducers } from 'redux';
import reduxTestReducer from "../views/ReduxTest/reducer";
import reduxLoadedImagesCount from "../views/Game/reducer";
export default combineReducers({
   loadedImagesCount: reduxLoadedImagesCount,
   create: reduxTestReducer,
});
