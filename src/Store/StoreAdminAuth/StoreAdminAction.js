import axios from 'axios';
import { masterStoreLogin } from './StoreAdminConstant';
import { useNavigate } from 'react-router-dom';
export const actionCreators = {

    masterStoreAdmin: (token) => async (dispatch, getState) => {
        dispatch({ type: masterStoreLogin, payload: token })
    }
}