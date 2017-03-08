//HOC === Decorator
import React from 'react'

export default (CustomComponent) => class DecoratedComponent extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return <CustomComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}