import {normalizedComments} from '../fixtures'
import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS, FAIL} from '../constants'
import {Record, Map} from 'immutable'
import {arrToMap} from './utils'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

const DefaultCommentsState = Record({
    entities: new Map({}),
    loading: false,
    error: null
})

export default (comments = new DefaultCommentsState(), action) => {
    const { type, payload, randomId,response } = action

    switch (type) {
        case ADD_COMMENT:
            /*return comments.set(randomId, new CommentModel({
                id: randomId,
                ...payload.comment
            }))*/
            return comments.mergeIn(['entities'], {
                id: randomId,
                ...payload.comment
            })

        case LOAD_ARTICLE_COMMENTS + START:
            return state.set('loading', true)

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state
                .mergeIn(['entities'], arrToMap(response, CommentModel))
                .set('loading', false)

        case LOAD_ARTICLE_COMMENTS + FAIL:
            return state
                .set('error', error.statusText)
                .set('loading', false)
    }

    return comments
}