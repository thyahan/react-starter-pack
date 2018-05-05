import _ from 'lodash';
import initialState from './initialState';
import { UPDATE_CORE_VALUE } from './action';

const core = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CORE_VALUE:
            return _.merge({}, state, {
                coreValue: action.value
            });    
        default:
            return state;
    }
}

export default core;