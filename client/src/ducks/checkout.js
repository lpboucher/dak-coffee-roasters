import { combineReducers } from 'redux';
import axios from 'axios';

import SUBMIT_PAYMENT_SUCCESS from './payments';

//Action Types
export const SUBMIT_ORDER_REQUEST = 'checkout/submit_order_request';
export const SUBMIT_ORDER_SUCCESS = 'checkout/submit_order_success';
export const SUBMIT_ORDER_FAILURE = 'checkout/submit_order_failure';
export const ORDER_FINALIZE_REQUEST = 'checkout/order_finalize_request';

//Action Creators
export const submitOrder = (customerId, { billingIsShipping, shipping, address }, items, total) => async dispatch => {
    dispatch({ type: SUBMIT_ORDER_REQUEST, payload: "Creating your order..." });
    console.log(items, total)
    const shipping_address = {
        first_name: shipping.address.name.split(" ")[0],
        last_name: shipping.address.name.split(" ")[1],
        line_1: shipping.address.line1,
        line_2: shipping.address.line2,
        city: shipping.address.city,
        postcode: shipping.address.postal_code,
        county: shipping.address.state,
        country: shipping.address.country,
      }
    const billing_address = 
        billingIsShipping ? 
            {...shipping_address} 
        : 
            {
                first_name: address.name ? address.name.split(" ")[0] : shipping.address.name.split(" ")[0],
                last_name: address.name ? address.name.split(" ")[1] : shipping.address.name.split(" ")[1],
                line_1: address.line1,
                line_2: address.line2,
                city: address.city,
                postcode: address.postal_code,
                county: address.state,
                country: address.country,
            }
    try {
        const res = await axios.post(`http://localhost:5000/api/checkout/`, { customerId, shipping_address, billing_address, items, total } );
        console.log('submitting order----------', res.data);
        dispatch({ type: SUBMIT_ORDER_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const finalizeOrder = () => async (dispatch, getState) => {
    dispatch({ type: ORDER_FINALIZE_REQUEST, payload: "Finalizing order..." });
    const order = getOrder(getState());
    console.log(order);
    try {
        const res = await axios.post(`http://localhost:5000/api/checkout/finalize`, order );
        console.log('finalizing order----------', res.data);
    } catch(err) {
        //dispatch({ type: SUBMIT_PAYMENT_FAILURE});
    }
}

//Reducers
const order = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_ORDER_SUCCESS:
        return {
            ...state,
            ...action.payload.data,
        }
        case SUBMIT_PAYMENT_SUCCESS:
            return {}
        default:
            return state
    }
}

const items = (state = [], action) => {
    switch (action.type) {
        case SUBMIT_ORDER_SUCCESS:
        return action.payload.included.items.map(item => item)
        case SUBMIT_PAYMENT_SUCCESS:
            return []
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

export const getOrderItems = (state) => state.checkout.items;

export const getOrder = (state) => state.checkout.order;