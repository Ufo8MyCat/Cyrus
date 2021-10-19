import { Filter } from '../../contstans/FilterData'

type Fillter = {
    creation_date: number,
    answer_count: number,
    view_count: number
}

export const filterQuestions = (filterName: string, list: [])=> {
    let newList = list
    switch (filterName) {
        case Filter.Data:
            newList = list.sort((a:Fillter, b: Fillter) => a.creation_date - b.creation_date)
            break;
        case Filter.Answers:
            newList = list.sort((a:Fillter, b: Fillter) => a.answer_count - b.answer_count)
            break;
        case Filter.Views:
            newList = list.sort((a:Fillter, b: Fillter) => a.view_count - b.view_count)
            break;
        default:
            break;
    }
    return newList
}