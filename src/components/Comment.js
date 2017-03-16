import React, {PropTypes}  from 'react'
import {connect} from 'react-redux'

function Comment(props) {
    const { text, user } = props.comment
    return (
        <div>
            <p>{text} <b>by {user}</b></p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    })
}

const mapStateToProps = (state, props) => {
    const { id } = props
    return {
        comment: state.comments.find(comment => comment.id === id)
    }
}

export default connect(mapStateToProps)(Comment)