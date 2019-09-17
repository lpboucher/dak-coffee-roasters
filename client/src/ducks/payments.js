import { combineReducers } from 'redux';
import axios from 'axios';

import { finalizeOrder } from './checkout';
import { clearCart } from './cart';

import { LOGOUT_SUCCESS } from '../ducks/user';

//Action Types
export const SUBMIT_PAYMENT_REQUEST = 'checkout/submit_payment_request';
export const SUBMIT_PAYMENT_SUCCESS = 'checkout/submit_payment_success';
export const SUBMIT_PAYMENT_FAILURE = 'checkout/submit_payment_failure';
export const SUBMIT_PAYMENT_CONFIRM = 'checkout/submit_payment_confirm';
export const CLEAR_PAYMENT_DETAILS = 'checkout/clear_payment_details';

//Action Creators
export const submitPayment = (payment, subscription = {}) => async dispatch => {
    dispatch({ type: SUBMIT_PAYMENT_REQUEST, payload: "loading.payment.processing"});
    const { has_recurring, plans } = subscription;
    const { customer } = payment;
    try {
        const res = await axios.post(`/api/payments/confirm`, payment );
        
        if (res.data.error) {
            dispatch({ type: SUBMIT_PAYMENT_FAILURE, payload: res.data.error});
        } else if (res.data.requires_action) {
            dispatch({ type: SUBMIT_PAYMENT_CONFIRM, payload: res.data, processing: "loading.payment.confirming" });
        } else if (res.data.success) {
            if(has_recurring) {dispatch(addSuscription(customer, plans, res.data.payment_method))}
            await dispatch(finalizeOrder());
            await dispatch({ type: SUBMIT_PAYMENT_SUCCESS, payload: res.data });
            await dispatch(clearCart())
            await dispatch(resetPaymentDetails())
        }
        //dispatch({ type: SUBMIT_ORDER_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: SUBMIT_PAYMENT_FAILURE});
    }
}

export const addSuscription = (customer, plans, payment_method) => async dispatch => {
    //dispatch({ type: SUBMIT_PAYMENT_REQUEST});
    try {
        const res = await axios.post(`/api/payments/subscribe`, { customer: customer, plans: plans, payment_method: payment_method } );
        //dispatch({ type: SUBMIT_ORDER_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: SUBMIT_PAYMENT_FAILURE});
    }
}

export const resetPaymentDetails = () => async dispatch => {
    await dispatch({ type: CLEAR_PAYMENT_DETAILS })
}

const initialStatus = {
    error: null,
    secret: null,
    action: false,
    success: false,
    subscribe: false
}
//Reducers
const status = (state = initialStatus, action) => {
    switch (action.type) {
        case SUBMIT_PAYMENT_REQUEST:
            return {
                ...state,
            }
        case SUBMIT_PAYMENT_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        case SUBMIT_PAYMENT_CONFIRM:
            return {
                ...state,
                action: action.payload.requires_action,
                secret: action.payload.payment_intent_client_secret,
            }
        case SUBMIT_PAYMENT_SUCCESS:
            return {
                ...state,
                success: action.payload.success,
                action: false,
                secret: null,
            }
        case CLEAR_PAYMENT_DETAILS:
        case LOGOUT_SUCCESS:
            return initialStatus
        default:
            return state
    }
}

export default combineReducers({
    status
})

//Selectors
export const getStatus = (state) => state.payments.status;