import {normalizedComments} from '../fixtures'
import { ADD_COMMENT } from '../constants'
import {arrToMap} from './utils'
import {Record} from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

export default (comments = arrToMap(normalizedComments, CommentModel), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, new CommentModel({
                id: randomId,
                ...payload.comment
            }))
    }

    return comments
}