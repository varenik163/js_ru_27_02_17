import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import {connect} from 'react-redux'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import {loadArticleComments} from '../AC'
import Loader from './Loader'

class CommentList extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    componentWillReceiveProps({isOpen, article, loadArticleComments}) {
        console.log('CommentList componentWillReceiveProps')
        if (!this.props.isOpen && isOpen && !this.props.loading && !article.commentsLoaded) loadArticleComments(article.id)
    }


    render() {
        const { error, loading, toggleOpen, isOpen} = this.props
        console.log(this.props)
        if (error) {
            return <h1>{error}</h1>
        }

        if (loading) {
            return <Loader />
        }
//        console.log('---', this.size)
        return (
            <div ref={this.getContainerRef}>
                <a href="#" onClick={toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getContainerRef = (ref) => {
        this.container = ref
        if (ref) {
            this.size = ref.getBoundingClientRect()
        }
    }

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) return null

        if (!article.comments || !article.comments.length) {
            return <div>
                <h3>
                    No comments yet
                </h3>
                <NewCommentForm articleId={article.id} />
            </div>
        }

        const commentItems = article.comments.map(id => <li key={id}><Comment id={id} /></li>)
        return (
            <div>
                <ul>
                    {commentItems}
                </ul>
                <NewCommentForm articleId={article.id} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.comments.loading,
        error: state.comments.error,
    }
}

export default connect(mapStateToProps, {loadArticleComments})(toggleOpen(CommentList))