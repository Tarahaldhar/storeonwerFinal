import { masterStoreLogin } from './StoreAdminConstant';
let initialState = {
    storeAdmin: [],
}
export const reducer = (state, action) => {
    state = state || initialState
    if (action.type === masterStoreLogin) {
        return {
            ...state, storeAdmin: action.payload
        }
    }
    return state
}