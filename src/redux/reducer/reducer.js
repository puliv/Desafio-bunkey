import * as actions from '../actions/actionTypes';

export default function (
    state = {
        valueOne: '',
        valueTwo: '',
        currentOperation: null,
        outcome:'0'
    }, action) {
    switch (action.type) {
        case actions.FIRST_VALUE:
            return {
                ...state,
                valueOne: action.payload
            };
        case actions.SECOND_VALUE:
            return {
                ...state,
                valueTwo: action.payload
            };
        case actions.OPERATION:
            let operationResult = 0;
            switch (state.currentOperation){
                case '+': operationResult = parseInt(state.valueOne) + parseInt(state.valueTwo)
                    return {
                        ...state,
                        outcome: operationResult
                    };
                default: 
                return {
                    ...state
                }
            }
        default:
            return {
                ...action,
                valueOne: 0
            }
    }
}

