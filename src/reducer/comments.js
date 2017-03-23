import {normalizedComments} from '../fixtures'
import { ADD_COMMENT } from '../constants'

export default (comments = normalizedComments, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.concat({
                id: randomId,
                ...payload.comment
            })
    }

    return comments
}