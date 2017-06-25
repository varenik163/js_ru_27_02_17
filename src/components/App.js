import React, { Component, PropTypes } from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {connect} from 'react-redux'
import ArticlesPage from './ArticlesPage'
import NotFound from './NotFound'
import Filters from './Filters/index'
import Counter from './Counter'
import CommentsPage from './CommentsPage'
import Menu, {MenuItem} from './Menu/index'
import {loadAllArticles} from '../AC'
import history from '../history'
import Switcher from './Switcher'
import dictionaries from '../dictionaries'
import LocalizedText from './LocalizedText'

class App extends Component {
    static propTypes = {
    };

    static childContextTypes = {
        user: PropTypes.string,
        dictionary: PropTypes.object
    }

    state = {
        text: '',
        language: 'en'
    }

    getChildContext() {
        return {
            user: this.state.text,
            dictionary: dictionaries[this.state.language]
        }
    }

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Switcher items = {['ru', 'en']} onChange={this.changeLang} active = {this.state.language}/>
                    <LocalizedText text="Enter your name"/>: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
                    <Menu>
                        <MenuItem path="/counter"/>
                        <MenuItem path="/filters"/>
                        <MenuItem path="/articles"/>
                        <MenuItem path="/comments"/>
                    </Menu>
                    <Switch>
                        <Route path="/counter" component={Counter} exact />
                        <Route path="/filters" component={Filters} />
                        <Route path="/articles" component={ArticlesPage} />
                        <Route path="/comments/:page" component={CommentsPage} />
                        <Redirect from="/comments" to="/comments/1"/>
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </ConnectedRouter>
        )
    }

    handleTextChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            text: ev.target.value
        })
    }

    changeLang = (language) => this.setState({ language })
}

export default connect(null, { loadAllArticles })(App)