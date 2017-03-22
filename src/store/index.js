import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/index'
import logger from '../middlewares/logger'
import idGenerator from '../middlewares/idGenerator'
import updateArticlesComments from '../middlewares/updateArticleComments'

const enhancer = applyMiddleware(logger, idGenerator, updateArticlesComments)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store