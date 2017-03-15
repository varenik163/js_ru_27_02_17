import {combineReducers} from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import selectArticleReducer from './selectArticle'
import dateRangeReducer from './dateRange'


export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    selected: selectArticleReducer,
    dateRange: dateRangeReducer

})