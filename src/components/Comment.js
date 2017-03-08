/**
 * Created by varenik163 on 04.03.17.
 */
import React, {Component} from 'react'

//Это можно сделать Functional Component, по возможности используй их
class Comment extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        const {comment} = this.props

        return (
            <div>
                <strong>{comment.user}</strong>
                <section>{comment.text}</section>
            </div>
        )
    }

}

export default Comment
