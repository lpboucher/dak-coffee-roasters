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
    LOGIN_SUCCESS
} from './user';

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
isProcessing: false
};

export default function reducer(state = initialState, action) {
switch(action.type) {
    case OPEN_CART:
        return { ...state, isCartOpen: true };
    case CLOSE_CART:
        return { ...state, isCartOpen: false };
    case SUBMIT_PAYMENT_REQUEST:
    case SUBMIT_PAYMENT_CONFIRM:
    case LOGIN_REQUEST:
        return { ...state, isProcessing: true };
    case SUBMIT_PAYMENT_FAILURE:
    case SUBMIT_PAYMENT_SUCCESS:
    case LOGIN_SUCCESS:
        return { ...state, isProcessing: false };
    default:
        return state;
}
}

//Selectors
export const isCartOpen = (state) => state.views.isCartOpen;

export const isProcessing = (state) => state.views.isProcessing;