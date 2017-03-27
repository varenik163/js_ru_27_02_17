import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from '../constants'
import {arrToMap} from './utils'
import {Record, Map} from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

const DefaultReducerState = Record({
    entities: new Map({})
})


export default (comments = new DefaultReducerState(), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, new CommentModel({
                id: randomId,
                ...payload.comment
            }))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return comments.mergeIn(['entities'], arrToMap(payload.response, CommentModel))
    }

    return comments
}