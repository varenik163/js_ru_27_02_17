import {normalizedArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'

export default (state = normalizedArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.filter(article => article.id !== payload.id)

    }

    return state
}