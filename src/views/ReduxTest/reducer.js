import {SET_EMAIL} from "./constans";
const initialState={email:"adipope91@yahoo.com"}

const reduxTestReducer = (state = initialState, action) => {
    console.log("Reducer",action)
    switch(action.type)
    {
        case SET_EMAIL:
            return{
                email:action.email
            }
        default:
            return initialState
    }
}
export default reduxTestReducer;