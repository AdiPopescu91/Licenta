import { SET_EMAIL } from "./constans";
const initialState={ email: ''}

const reduxTestReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EMAIL:
            return {
                email:action.email
            }
        default:
            return state
    }
}
export default reduxTestReducer;
