import {createSelector} from 'reselect'

export const getArticles = state => state.articles
export const getFilters = state => state.filters
export const getComments = state => state.comments
export const getId = (state, props) => props.id

export const filteredArticlesSelector = createSelector(getArticles, getFilters, getFilteredArticles)

export const createFindCommentSelector = () => createSelector(getComments, getId,
    (comments, id) => {
        console.log('---', 'searching for comment', id)
        return comments.find(comment => comment.id === id)
    }
)

function getFilteredArticles(articles, filters) {
    console.log('---', 'calculating filtering')
    const { selected, dateRange: { from, to } } = filters

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
}