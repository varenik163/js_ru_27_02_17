import React, { PropTypes } from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

function MenuItem({ path }) {
    return (
        <div>
            <NavLink to={path} activeClassName="active">{path}</NavLink>
        </div>
    )
}

MenuItem.propTypes = {
}

export default MenuItem