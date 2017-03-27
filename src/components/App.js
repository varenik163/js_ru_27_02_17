import React, { Component, PropTypes } from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import ArticleList from './ArticleList/index'
import NotFound from './NotFound'
import Filters from './Filters/index'
import Counter from './Counter'
import {loadAllArticles} from '../AC'

class App extends Component {
    static propTypes = {
    };

    state = {
        text: ''
    }

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        return (
            <Router>
                <div>
                    Enter your name: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
                    <Switch>
                        <Route path="/counter" component={Counter} exact />
                        <Route path="/filters" component={Filters} />
                        <Route path="/articles" component={ArticleList} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }

    handleTextChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            text: ev.target.value
        })
    }
}

export default connect(null, { loadAllArticles })(App)