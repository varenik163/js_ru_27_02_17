import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import store from './store/index'
import {Provider} from 'react-redux'

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('container'))