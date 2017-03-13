import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList/index'
import Chart from './Chart'
import Select from 'react-select'
import { DateRangePicker } from 'react-dates'
import 'react-select/dist/react-select.css'
import 'react-dates/lib/css/_datepicker.css'

//компонент становится слишком большим, пора разбивать на более мелкие
class App extends Component {

    constructor(props) {
        super(props);

        let focusedInput = null;
        if (props.autoFocus) {
            focusedInput = START_DATE;
        } else if (props.autoFocusEndDate) {
            focusedInput = END_DATE;
        }

        this.state = {
            text: '',
            selected: null,
            focusedInput,
            //лучше не завязывать на пропсы. Потом не понятно что делать если они поменяются
            startDate: props.initialStartDate,
            endDate: props.initialEndDate,
        };

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

   /* state = {
        text: '',
        selected: null,
        startDate: null,
        endDate: null
    }*/

    onDatesChange({ startDate, endDate }) {
        this.setState({ startDate, endDate })
    }

    onFocusChange(focusedInput) {
        this.setState({ focusedInput })
    }

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                Enter your name: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
                <Select options = {options} value={this.state.selected} onChange = {this.handleSelectChange} multi/>
                <DateRangePicker
                    onDatesChange={this.onDatesChange}
                    onFocusChange={this.onFocusChange}
                    focusedInput={this.state.focusedInput}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                />
                <ArticleList articles={this.props.articles}/>
                <Chart articles={this.props.articles}/>
            </div>
        )
    }

    handleSelectChange = selected => {
        this.setState({ selected })
    }

    handleTextChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            text: ev.target.value
        })
    }
}

export default App
