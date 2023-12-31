import { TYPES } from "../actions/actionTypes";

const initialState = {

}
const notifyReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TYPES.NOTIFY:
            return action.payload
        default:
            return state
    }
}
export default notifyReducer