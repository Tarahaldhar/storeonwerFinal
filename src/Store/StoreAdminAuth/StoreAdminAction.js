import axios from 'axios';
import { masterStoreLogin } from './StoreAdminConstant';
export const actionCreators = {
    
    masterStoreAdmin: (token) => async (dispatch, getState) => {
        const getToken=getState().masterStoreAdmin
    console.log('gettoken', getToken);
        axios({
            url: "https://thewiseowl.pythonanywhere.com/storeowner/login/",
            data: {
                
                "email": token?.email,
                "password": token?.password
            },
            method:"post"
        }).then( (res)=>{
            console.log('token', res?.data?.token);
            dispatch({type:masterStoreLogin, payload:res.data})
        }).catch((error)=>{
            alert("connection fail")
            console.log('error', error);
        })
    }
}