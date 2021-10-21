import { combineReducers } from "redux";
import AuthReducer from "./Auth/AuthReducer";



export const rootReducer=combineReducers({
    auth:AuthReducer
})