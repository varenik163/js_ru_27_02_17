import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE, DATE_RANGE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}


export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectArticle(selected) {
    return {
        type: SELECT_ARTICLE,
        payload: { selected }
    }
}

export function dateRange({from, to}) {
    return {
        type: DATE_RANGE,
        payload: { from, to }
    }
}