import { combineReducers } from 'redux';
import axios from 'axios';

//Action Types
export const SUBMIT_PAYMENT_REQUEST = 'checkout/submit_payment_request';
export const SUBMIT_PAYMENT_SUCCESS = 'checkout/submit_payment_success';
export const SUBMIT_PAYMENT_FAILURE = 'checkout/submit_payment_failure';
export const SUBMIT_PAYMENT_CONFIRM = 'checkout/submit_payment_confirm';

//Action Creators
export const submitPayment = (payment) => async dispatch => {
    dispatch({ type: SUBMIT_PAYMENT_REQUEST});
    console.log(payment)
    try {
        const res = await axios.post(`http://localhost:5000/api/payments/confirm`, payment );
        console.log('submitting payment----------', res.data);
        
        if (res.data.error) {
            dispatch({ type: SUBMIT_PAYMENT_FAILURE, payload: res.data.error});
        } else if (res.data.requires_action) {
            dispatch({ type: SUBMIT_PAYMENT_CONFIRM, payload: res.data });
        } else if (res.data.success) {
            dispatch({ type: SUBMIT_PAYMENT_SUCCESS, payload: res.data });
        }
        //dispatch({ type: SUBMIT_ORDER_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: SUBMIT_PAYMENT_FAILURE});
    }
}

const initialStatus = {
    error: null,
    secret: null,
    action: false,
    success: false,
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
        default:
            return state
    }
}

export default combineReducers({
    status
})

//Selectors
export const getStatus = (state) => state.payments.status;