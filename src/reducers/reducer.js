import { combineReducers } from 'redux';
import reduxTestReducer from "../views/ReduxTest/reducer";
import reduxLoadedImagesCount from "../views/Game/reducer";
import snackbarReducer from "../components/SnackBar/reducer";
export default combineReducers({
   loadedImagesCount: reduxLoadedImagesCount,
   create: reduxTestReducer,
   snackbar: snackbarReducer,
});
