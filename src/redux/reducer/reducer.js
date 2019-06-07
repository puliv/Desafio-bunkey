import { FIRST_VALUE, SECOND_VALUE, OPERATION, RESULT } from '../actions/actionTypes';

export default (
    state = {
        valueOne: '',
        valueTwo: '',
        currentOperation: null,
        outcome: '0'
    }, action) => {
    switch (action.type) {
        case FIRST_VALUE:
            return {
                ...state,
                valueOne: action.payload
            };
        case SECOND_VALUE:
            return {
                ...state,
                valueTwo: action.payload
            };
        case OPERATION:
            return {
                ...state,
                currentOperation: action.payload.operatorSign
            };
        case RESULT:
            return {
                ...state,
                outcome: action.payload
            };
        default: return state
    }
}

