import {DATE_RANGE} from '../constants'

export default (state = {from: null, to: null}, action) => {
    const { type, payload } = action

    switch (type) {
        case DATE_RANGE:
            return { from: payload.from, to: payload.to }

    }

    return state
}