//import {  } from './trades';

//import {  } from './coins'; 

//Action Types
import { 
    SUBMIT_PAYMENT_REQUEST,
    SUBMIT_PAYMENT_CONFIRM,
    SUBMIT_PAYMENT_FAILURE,
    SUBMIT_PAYMENT_SUCCESS
} from './payments';

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from './user';

import {
    SUBMIT_ORDER_REQUEST,
    SUBMIT_ORDER_SUCCESS
} from './checkout';

import {
    FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS
} from './cart';

export const OPEN_CART = 'views/open_cart';
export const CLOSE_CART = 'views/close_cart';


//Action Creators
export const openCartToolTip = () => dispatch => {
    dispatch({type: OPEN_CART})
}

export const closeCartToolTip = () => dispatch => {
    dispatch({type: CLOSE_CART})
}


//Reducer
const initialState = {
isCartOpen: false,
isLoading: false,
isProcessing: false,
processingText: "",
error: ""
};

export default function reducer(state = initialState, action) {
switch(action.type) {
    case OPEN_CART:
        return { ...state, isCartOpen: true };
    case CLOSE_CART:
        return { ...state, isCartOpen: false };
    case SUBMIT_PAYMENT_REQUEST:
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
    case REGISTER_REQUEST:
    case SUBMIT_ORDER_REQUEST:
    case FETCH_CART_REQUEST:
        return { ...state,
            isProcessing: true,
            processingText: action.payload,
         };
    case SUBMIT_PAYMENT_CONFIRM:
        return { ...state,
            isProcessing: true,
            processingText: action.processing,
            };
    case SUBMIT_PAYMENT_FAILURE:
    case SUBMIT_PAYMENT_SUCCESS:
    case LOGIN_SUCCESS:
    case LOGOUT_SUCCESS:
    case REGISTER_SUCCESS:
    case SUBMIT_ORDER_SUCCESS:
    case FETCH_CART_SUCCESS:
        return { ...state,
                isProcessing: false,
                error: "",
                processingText: "" };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
            return { 
                ...state,
                isProcessing: false,
                error: action.payload,
                processingText: "" };
    default:
        return state;
}
}

//Selectors
export const isCartOpen = (state) => state.views.isCartOpen;

export const isProcessing = (state) => state.views.isProcessing;

export const getProcessingText = (state) => state.views.processingText;

export const getError = (state) => state.views.error;