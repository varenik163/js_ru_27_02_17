import React, {PropTypes, Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
        openElementId: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        toggleOpenElement: PropTypes.func
    };

    static defaultProps = {
        articles: [],
        openElementId: null,
        toggleOpenElement: null
    };

    render() {
        const {articles} = this.props
        const {openElementId, toggleOpenElement} = this.props

        const articleComponents = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === openElementId}
                     toggleOpen={toggleOpenElement(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }

}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default accordion(ArticleList);