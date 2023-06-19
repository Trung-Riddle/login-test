import { combineReducers } from "redux";
import auth from "./authReducer";
import notify from "./notifyReducer";
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
const store: any = combineReducers({
    auth,
    notify
})
export default store