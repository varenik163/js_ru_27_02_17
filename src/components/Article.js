import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props
        const {isOpen} = this.state
        const {comments} = article
        //Я б эту проверку спрятал в CommentList
        const commentList = comments ? <CommentList comments={comments}/> : ''
        const body = isOpen ? <section>{article.text}{commentList}</section> : null
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
