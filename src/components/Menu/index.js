import React, { Component, PropTypes } from 'react'
import MenuItem from './MenuItem'

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h3>Menu</h3>
                {this.props.children}
            </div>
        )
    }
}

export { MenuItem }
export default Menu