import { configureStore } from '@reduxjs/toolkit';
import * as StoreAdminReducer from "./StoreAdminAuth/StoreAdminReducer";
import * as SalesReducer from "./StoreAdminPannel/SalesReducer";
import * as Toggle from "./SidebarComponent/SidebarReducer";
import * as salesToken from "./SalesAuthToken/StoreAdminReducer";

export const store = configureStore({
    reducer: {
        storeAdminLogin: StoreAdminReducer.reducer,
        salesData: SalesReducer.reducer,
        toggle: Toggle.reducer,
        salesToken: salesToken.reducer
    }
})
export default store