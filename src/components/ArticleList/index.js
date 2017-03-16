import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import Article from '../Article/index'
import CSSTransition from 'react-addons-css-transition-group'
import accrdion from '../../decorators/accordion'
import './style.css'

class ArticleList extends Component {
    render() {
        const {articles, toggleOpenItem, isItemOpened} = this.props

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

const mapStateToProps = state => {
    console.log('---', 'connect, state = ', state)
    const selected = state.selected.selected ? state.selected.selected : false
    const dateRange = state.dateRange
    let checkedArticles = state.articles
    if(selected){
        let selectedValues = selected.map(article => article.value)
        checkedArticles = checkedArticles.filter((article) => {
            if (selectedValues.length > 0 && selectedValues.indexOf(article.id) == -1) return false
            return true
        })
    }

    checkedArticles = checkedArticles.filter((article) => {
        if (dateRange.from && dateRange.to) {
            let from = dateRange.from.getTime()
            let to = dateRange.to.getTime()
            let postDate = Date.parse(article.date)

            if (postDate < from || postDate > to){
                console.log(' вне рамок',postDate, from, to)
                return false
            }
        }
        return true
    })



    return {
        articles: checkedArticles
    }
}

export default connect(mapStateToProps)(accrdion(ArticleList))

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isItemOpened: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}