import {createStore} from 'redux'
import reducer from '../reducer/index'

//const store = createStore(reducer)

//dev only
window.store = createStore(reducer)

export default store