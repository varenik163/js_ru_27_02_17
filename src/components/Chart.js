import React, { Component, PropTypes } from 'react'

class Chart extends Component {
    static propTypes = {

    };

    initRef = (ref) => {
        this.container = ref
        if (!ref) return

        //do something with d3
    }

    render() {
        return <div ref={this.initRef}/>
    }
}

export default Chart