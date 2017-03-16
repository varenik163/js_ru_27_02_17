import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import { selectArticle } from '../../AC/index'
import {connect} from 'react-redux'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

   /* state = {
        selected: null
    }*/

    handleChange = selected => {
        //this.setState({ selected })
        console.log(selected)
        this.props.dispatchselectArticle(selected)
    }

    render() {
        const selected = this.props.selected.selected
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    articles: state.articles,
    selected: state.selected
}), {
    dispatchselectArticle: selectArticle
})(SelectFilter)