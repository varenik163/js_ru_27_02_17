import React, { Component, PropTypes } from 'react'
import MenuItem from './MenuItem'
import LocalizedText from '../LocalizedText'

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h3><LocalizedText text="Menu"/></h3>
                {this.props.children}
            </div>
        )
    }
}

export { MenuItem }
export default Menu