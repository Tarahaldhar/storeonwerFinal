import { salesToken } from './StoreAdminConstant';
let initialState = {
    salestoken: {},
}
export const reducer = (state, action) => {
    state = state || initialState
    console.log(action);
    if (action.type === salesToken) {
        return {
            ...state, salestoken: action.payload
        }
    }
    return state
}