import * as actions from '../actions/actionTypes';

export default function (
    state = {
        valueOne: '',
        valueTwo: ''
    }, action) {
        switch (action.type) {
            case actions.FIRST_VALUE:
                return {
                    ...state,
                    valueOne: action.payload
                };
            default:
            return {
                ...action,
                valueOne: 0
            }
        }
    }

