/**
 * Created by varenik163 on 04.03.17.
 */
import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
          //это совсем не нужно в state, ты можешь получить текст из прошлой переменной
            commentLinkText: "Show comments"
        }
    }

    render() {
        const {comments} = this.props
        const commentsComponents = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
        const {isOpen} = this.state
        const {commentLinkText} = this.state
        const body = isOpen ? <ul>{commentsComponents}</ul> : null

        return (
            <div>
                <a href="" onClick={this.handleClick}>{commentLinkText}</a>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen,
            commentLinkText: this.state.isOpen ? "Show comments" : "Hide comments"
        })
    }
}

export default CommentList
