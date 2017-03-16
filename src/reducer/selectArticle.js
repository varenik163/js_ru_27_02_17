import {articles} from '../fixtures'
import {SELECT_ARTICLE} from '../constants'

export default (state = articles, action) => {
    const { type, payload } = action

    switch (type) {
        case SELECT_ARTICLE:
            return payload

    }

    return state
}