import initialState from "./initialState";
import { UPDATE_HOME } from './action';

const home = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_HOME:
            return Object.assign({}, state, {
                ...state,
                home: action.home,
            });    
        default:
            return state;
    }
}