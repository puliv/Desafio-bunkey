import * as actions from "./actionTypes";

export const numOne = dispatch => valueOne => {
    dispatch({
        type: actions.FIRST_VALUE,
        payload: valueOne
    })
}
export const numTwo = dispatch => valueTwo => {
    dispatch({
        type: actions.SECOND_VALUE,
        payload: valueTwo
    })
}