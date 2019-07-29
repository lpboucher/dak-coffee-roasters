import { combineReducers } from 'redux';
import axios from 'axios';

import { getProduct } from './products';

//Action Types
export const SUBMIT_ORDER_REQUEST = 'checkout/submit_order_request';
export const SUBMIT_ORDER_SUCCESS = 'checkout/submit_order_success';
export const SUBMIT_ORDER_FAILURE = 'checkout/submit_order_failure';

//Action Creators
export const submitOrder = (customerId, { billingIsShipping, shipping, address }) => async dispatch => {
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

export const getOrderItems = (state) => state.checkout.items;

export const getOrder = (state) => state.checkout.order;