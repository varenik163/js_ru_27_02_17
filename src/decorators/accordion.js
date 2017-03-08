/**
 * Created by varenik163 on 08.03.17.
 */
//HOC === Decorator
import React from 'react'

export default (CustomComponent) => class DecoratedComponent extends React.Component {
    state = {
        openElementId: null
    }

    toggleOpenElement = openElementId => ev => {
        this.setState({
            openElementId
        })
    }

    render() {
        return <CustomComponent {...this.props} {...this.state} toggleOpenElement={this.toggleOpenElement} />
    }
}