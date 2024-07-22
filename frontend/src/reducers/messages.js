import {GET_MESSAGES, DELETE_MESSAGE, ADD_MESSAGE, CREATE_MESSAGE} from '../actions/types.js';

const initialState = {};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_MESSAGES:
            return action.payload;
        case CREATE_MESSAGE:
            return (state = action.payload);
        default:
            return state;
    }
}