import { DateRange } from './DateRangeConstant';
let initialState = {
    dateRange: {
        start: '',
        end: ''
    },

}
export const reducer = (state, action) => {
    state = state || initialState
    if (action.type === DateRange) {
        return {
            ...state, dateRange: action.payload
        }
    }
    return state
}