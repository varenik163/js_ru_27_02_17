/**
 * Created by varenik163 on 12.03.17.
 */
import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import CSSTransition from 'react-addons-css-transition-group'

class AddCommentForm extends Component {

    state = {
        comment: '',
        name: ''
    }

    render (){
        return (
            <form>
                <div>Name</div>
                <div>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                </div>

                <div>E-mail</div>
                <div>
                    <input type="text" />
                </div>

                <div>Comment</div>
                <div>
                    <textarea type="text" value={this.state.comment} onChange={this.handleCommentChange} />
                </div>
            </form>
        )
    }

    handleNameChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            name: ev.target.value
        })
    }

    handleCommentChange = ev => {
        if (ev.target.value.length > 150) return

        this.setState({
            comment: ev.target.value
        })
    }
}

export default AddCommentForm