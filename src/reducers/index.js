import { combineReducers } from "redux";
import modeReducer from "./modeReducer";

const rootReducer = combineReducers({
    mode : modeReducer
})

export default rootReducer;