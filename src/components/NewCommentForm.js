import React, { Component, PropTypes } from 'react'
import {addComment} from '../AC'
import {connect} from 'react-redux'

class NewCommentForm extends Component {
    static propTypes = {
    }

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        const {value} = ev.target
        if (!validators[field](value)) return

        this.setState({
            [field]: value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.setState({
            user: '',
            text: ''
        })
        this.props.dispatchAddComment(this.props.article_id,this.state.user,this.state.text)
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

const validators = {
    text: (text) => text.length < 150,
    user: (text) => text.length < 10
}

export default connect(null, {
    dispatchAddComment: addComment
})(NewCommentForm)