import {LOADED_IMAGES_COUNT} from "./constans";
const initialState={ loadedImages : 0 }

const reduxReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADED_IMAGES_COUNT:
            return{
                loadedImages: state.loadedImages + 1
            }
        default:
            return state
    }
}
export default reduxReducer;
