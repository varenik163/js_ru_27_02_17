import {articles} from '../fixtures'
import {SELECT_ARTICLE} from '../constants'

export default (state = articles, action) => {
    const { type, payload } = action

    switch (type) {
        case SELECT_ARTICLE:
            //очень много проблем будет, храни просто id выбраных статей
            return state.filter(article => article.id === payload.id)

    }

    return state
}
