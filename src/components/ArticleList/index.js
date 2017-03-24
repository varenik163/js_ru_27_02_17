import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import Article from '../Article/index'
import Loader from '../Loader'
import CSSTransition from 'react-addons-css-transition-group'
import accrdion from '../../decorators/accordion'
import {filteredArticlesSelector} from '../../selectors/index'
import './style.css'

class ArticleList extends Component {
    render() {
        const {articles, error, loading, toggleOpenItem, isItemOpened} = this.props
        if (error) {
            return <h1>{error}</h1>
        }

        if (loading) {
            return <Loader />
        }

        const articleComponents = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={isItemOpened(article.id)}
                     toggleOpen={toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <CSSTransition component="ul"
                           transitionName="article-list"
                           transitionAppear={true}
                           transitionAppearTimeout={100}
                           transitionEnterTimeout={500}
                           transitionLeaveTimeout={300}
            >
                {articleComponents}
            </CSSTransition>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: filteredArticlesSelector(state),
        loading: state.articles.loading,
        error: state.articles.error
    }
}

export default connect(mapStateToProps)(accrdion(ArticleList))

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isItemOpened: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}