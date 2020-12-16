import axios from 'axios'
import Constant from "./constant"
import initialState from "./state"


export default function rootReducer(state=initialState, action){
    switch(action.type){
        default:
            return state;
    }
}