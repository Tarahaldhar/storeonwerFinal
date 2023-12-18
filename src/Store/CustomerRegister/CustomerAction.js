import { CustomerRegister } from './CustomerConstant';
import axios from 'axios';
export const actionCreators = {
    CustomerRegister: () => async (dispatch, getState) => {
        axios({
            url: 'https://sandy00099.pythonanywhere.com/salesperson/create/',
            data: {
                "name": customerjorney.name,
                "email": customerjorney.email,
                "phone_number": customerjorney.phone_number,
                "salesperson_name": salespersonname,
            },
            method: 'post'

        }).then((result) => {
            dispatch({ type: CustomerRegister, payload: result.data })
        }).catch((error) => {
            console.log('error', error);
        })
    }
}