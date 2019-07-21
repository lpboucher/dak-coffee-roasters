import { combineReducers } from 'redux';
import axios from 'axios';

//Action Types
export const SUBMIT_ORDER_REQUEST = 'checkout/submit_order_request';
export const SUBMIT_ORDER_SUCCESS = 'checkout/submit_order_success';
export const SUBMIT_ORDER_FAILURE = 'checkout/submit_order_failure';

//Action Creators
export const submitOrder = (customerId, { shipping_address, billing_address = shipping_address }) => async dispatch => {
    try {
        const res = await axios.post(`http://localhost:5000/api/checkout/`, { customerId, shipping_address, billing_address } );
        console.log('submitting order----------', res.data);
        dispatch({ type: SUBMIT_ORDER_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

//Reducers
const order = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_ORDER_SUCCESS:
        console.log(action.payload.data)
        return {
            ...state,
            ...action.payload.data,
        }
        default:
            return state
    }
}

const items = (state = [], action) => {
    switch (action.type) {
        case SUBMIT_ORDER_SUCCESS:
        console.log(action.payload.included)
        return action.payload.included.items.map(item => item)
        default:
            return state
    }
}

export default combineReducers({
    order,
    items
})

//Selectors
export const orderExists = (state) => Object.keys(state.checkout.order).length >= 1;

export const getOrder = (state) => state.checkout.order;