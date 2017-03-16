import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import {connect} from 'react-redux'
import {dateRange} from '../../AC/index'

class DateRange extends Component {

    handleDayClick = (day) => {
        const { from, to } = this.props
        console.log({ from, to })
        this.props.dispatchDateRange(DateUtils.addDayToRange(day, { from, to }))
    }

    render() {
        const { from, to } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    from: state.dateRange.from,
    to: state.dateRange.to
}), {
    dispatchDateRange: dateRange
})(DateRange)