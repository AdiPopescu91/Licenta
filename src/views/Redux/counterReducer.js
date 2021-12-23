import {SET_NAME} from "./constans";
const initialState={name:"Adrian"}

const reduxReducer = (state = initialState, action) => {
switch(action.type)
{
    case SET_NAME:
        return{
            name:action.name
        }
    default:
        return initialState
}
}
export default reduxReducer;