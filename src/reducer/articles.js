import {normalizedArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {Record} from 'immutable'
import {arrToMap} from './utils'

const ArticleModel = Record({
    "id": null,
    "date": null,
    "title": null,
    "text": null,
    "comments": []
})

export default (state = arrToMap(normalizedArticles, ArticleModel), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.delete(payload.id)

        case ADD_COMMENT:
            return state.updateIn([payload.articleId, 'comments'], (comments) => comments.concat(randomId))

    }

    return state
}