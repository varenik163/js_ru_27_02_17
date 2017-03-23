import {normalizedArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

export default (state = normalizedArticles, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.filter(article => article.id !== payload.id)

        case ADD_COMMENT:
            return state.map(article => article.id !== payload.articleId
                ? article
                : {
                    ...article,
                    comments: article.comments.concat(randomId)
                }
            )

    }

    return state
}