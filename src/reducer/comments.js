import {normalizedComments} from '../fixtures'
import { ADD_COMMENT } from '../constants'

export default (comments = normalizedComments, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            comments.push({id: payload.id, user: payload.user, text: payload.text})
            return comments

    }

    return comments
}