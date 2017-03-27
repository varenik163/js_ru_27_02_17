import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList/index'
import Article from './Article/index'
import {Route} from 'react-router-dom'

class ArticlesPage extends Component {
    static propTypes = {

    };

    render() {
        const {match} = this.props
        return (
            <div>
                <ArticleList match={match}/>
                <Route path={`${match.url}/:id`} component={Article}/>
            </div>
        )
    }
}

export default ArticlesPage