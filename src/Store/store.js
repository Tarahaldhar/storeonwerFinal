import { configureStore } from '@reduxjs/toolkit';
import * as StoreAdminReducer from "./StoreAdminAuth/StoreAdminReducer";
export const store=configureStore({
    reducer:{
        storeAdminLogin:StoreAdminReducer.reducer
    }
})
export default store