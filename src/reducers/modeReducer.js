import { DARKMODE,LIGHTMODE } from "../types";

const initialState = false;

export default function modeReducer (state=initialState,action){
    switch(action.type){
        case DARKMODE:
            return state = true;
        case LIGHTMODE:
            return state = false;
        default: return state;
    }
}