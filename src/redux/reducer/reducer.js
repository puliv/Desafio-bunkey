import * as actions from '../actions/actionTypes';

export default (
    state = {
        valueOne: '',
        valueTwo: '',
        currentOperation: null,
        outcome: '0'
    }, action) => {
    switch (action.type) {
        case actions.FIRST_VALUE:
            return {
                ...state,
                valueOne: parseInt(action.payload)
            };
        case actions.SECOND_VALUE:
            return {
                ...state,
                valueTwo: parseInt(action.payload)
            };
        case actions.OPERATION:
            return {
                ...state,
                currentOperation: action.payload.operatorSign
            };
        default: return { ...state }
    }
}

