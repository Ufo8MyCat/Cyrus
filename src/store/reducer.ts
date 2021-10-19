
import { Action, State } from './types'
import * as t from './actionType'
import { initialState } from './initialState';

function userReducer(state = initialState, action: Action): State{
    switch (action.type) {
        case t.SET_LIST:
            return {
                ...state,
                list: action.payload,
            };
        case t.SET_QUESTION:
            return {
                ...state,
                totlaQuestion: action.payload
            }
        default:
            return state
    }
}

export default userReducer