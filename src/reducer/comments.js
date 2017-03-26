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
    const { type, payload, randomId } = action
    console.log(action)

    switch (type) {
        case ADD_COMMENT:
            /*return comments.set(randomId, new CommentModel({
                id: randomId,
                ...payload.comment
            }))*/
            return comments.mergeIn(['entities'], arrToMap([{id: randomId, ...payload.comment}], CommentModel))

        case LOAD_ARTICLE_COMMENTS + START:
            console.log(LOAD_ARTICLE_COMMENTS + START)
            return comments.set('loading', true)

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            console.log(LOAD_ARTICLE_COMMENTS + SUCCESS)
            return comments
                .mergeIn(['entities'], arrToMap(payload.response, CommentModel))
                .set('loading', false)

        case LOAD_ARTICLE_COMMENTS + FAIL:
            console.log(LOAD_ARTICLE_COMMENTS + FAIL)
            return comments
                .set('error', payload.error.statusText)
                .set('loading', false)
    }

    return comments
}