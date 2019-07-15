import { combineReducers } from 'redux';
import axios from 'axios';

//Action Types
export const SUBMIT_ORDER_REQUEST = 'checkout/submit_order_request';
export const SUBMIT_ORDER_SUCCESS = 'checkout/submit_order_success';
export const SUBMIT_ORDER_FAILURE = 'checkout/submit_order_failure';

//Action Creators
export const submitOrder = ({ customer, shipping_address, billing_address = shipping_address }) => async dispatch => {
    try {
        const res = await axios.post(`http://localhost:5000/api/checkout/`, { customer, shipping_address, billing_address } );
        console.log('submitting order----------', res.data);
        //dispatch({ type: SUBMIT_ORDER_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}


//Reducers
const byId = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_ORDER_SUCCESS:
        return {
            ...state,
        }
        default:
            return state
    }
}

export default combineReducers({
    byId,
})

//Selectors
