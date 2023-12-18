import { configureStore } from '@reduxjs/toolkit';
import * as StoreAdminReducer from "./StoreAdminAuth/StoreAdminReducer";
import * as SalesReducer from "./StoreAdminPannel/SalesReducer";
export const store = configureStore({
    reducer: {
        storeAdminLogin: StoreAdminReducer.reducer,
        salesData: SalesReducer.reducer
    }
})
export default store