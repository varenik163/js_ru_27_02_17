import  {ADD_COMMENT} from '../constants'

export default store => next => action => {
    switch (action.type){
        case ADD_COMMENT:
            const {article_id} = action.payload
            let articles = store.getState().articles
            let new_articles = articles.map(article => {
                if(article.id === article_id){
                    article.comments.push(action.payload.id)
                    return article
                }
                return article
            })
            next({
                ...action,
                payload: {
                    ...action.payload,
                    id: action.payload.id,
                    articles: new_articles
                }
            })
            break;

        default:
            next(action);
    }
}

