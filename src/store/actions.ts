import { filterQuestions } from '../components/utils/utils'
import * as t from './actionType'
import { State } from './types'

export const setList = (list: Array<any>) => (dispatch: ({ type, payload }: any) => State) => {
    dispatch({
        type: t.SET_LIST,
        payload: list
    })
}

export const setTotalQuestion = (questions: number) => (dispatch: ({ type, payload }: any) => State) => {
    dispatch({
        type: t.SET_QUESTION,
        payload: questions
    })
}

export const setFilter = (filterName: string, list: []) => (dispatch: ({ type, payload }: any) => State) => {
    dispatch({
        type: t.SET_LIST,
        payload: filterQuestions(filterName, list)
    })
}
