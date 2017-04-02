import React, { Component, PropTypes } from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {connect} from 'react-redux'
import ArticlesPage from './ArticlesPage'
import Translator from '../decorators/Translator'
import NotFound from './NotFound'
import Filters from './Filters/index'
import Counter from './Counter'
import CommentsPage from './CommentsPage'
import Menu, {MenuItem} from './Menu/index'
import {loadAllArticles} from '../AC'
import history from '../history'
import dictionary from '../dictionary'

class App extends Component {
    static propTypes = {
        //location: PropTypes.string
    };

    static childContextTypes = {
        user: PropTypes.string,
        translate: PropTypes.object
    }

    state = {
        text: ''
    }

    getChildContext() {
        return {
            user: this.state.text,
            translate: dictionary[this.props.location]
        }
    }

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        console.log(this.props) // не пойму почему здесь в пропсах нет match
        return (
            <ConnectedRouter history={history}>
                <div>
                    {this.renderLang}
                    Enter your name: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
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

    renderLang() {
        const lang = location === 'ru' ? 'en' : 'ru';
        const { location } = this.props;
        return (
            <div>
                <NavLink to={`/${lang}`} activeClassName="active">{dictionary[location]['switchLanguege']}</NavLink>
            </div>
        )
    }

    handleTextChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            text: ev.target.value
        })
    }
}

export default connect((state, props) => { return {location : props.match.location} }, { loadAllArticles })(Translator(App))