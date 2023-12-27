import axios from 'axios';
import { salesToken } from './StoreAdminConstant';
import { useNavigate } from 'react-router-dom';
export const actionCreators = {

    salesToken: (token) => async (dispatch, getState) => {
        dispatch({ type: salesToken, payload: token })
    }
}