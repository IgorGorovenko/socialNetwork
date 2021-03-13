import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sitebarReducer from "./sitebarReducer";

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    sitebarReducer: sitebarReducer
})

let store = createStore(reducers)

export default store