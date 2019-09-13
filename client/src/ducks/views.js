import { clearCart } from './cart';
import { fetchProducts } from './products';

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
    REGISTER_SUCCESS,
    UPDATE_REQUEST,
    UPDATE_SUCCESS,
    FETCH_SUCCESS,
    NEWSLETTER_REQUEST,
    NEWSLETTER_SUCCESS
} from './user';

import {
    SUBMIT_ORDER_REQUEST,
    SUBMIT_ORDER_SUCCESS,
    ORDER_FINALIZE_REQUEST
} from './checkout';

import {
    FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS,
    PROMO_CART_FAILURE
} from './cart';

export const OPEN_CART = 'views/open_cart';
export const CLOSE_CART = 'views/close_cart';
export const OPEN_MOBILE = 'views/open_mobile';
export const CLOSE_MOBILE = 'views/close_mobile';
export const CHANGE_CURRENCY_REQUEST = 'views/change_currency_request';
export const CHANGE_CURRENCY_SUCCESS = 'views/change_currency_success';
const APPLY_MINI_HEADER = 'views/apply_mini_header';
const REMOVE_MINI_HEADER = 'views/remove_mini_header';
const SCROLL_HEIGHT = 'views/scroll_height'


//Action Creators
export const openCartToolTip = () => dispatch => {
    dispatch({type: OPEN_CART})
}

export const closeCartToolTip = () => dispatch => {
    dispatch({type: CLOSE_CART})
}

export const openMobileMenu = () => dispatch => {
    dispatch({type: OPEN_MOBILE})
}

export const closeMobileMenu = () => dispatch => {
    dispatch({type: CLOSE_MOBILE})
}

export const switchDisplayCurrency = (currency) => (dispatch, getState) => {
    const cart = getState()['cart']
    if(
        cart.allIds.length > 0 &&
        cart.meta.display_price.with_tax.currency !== currency 
    ) {
        dispatch(clearCart())
    }
    dispatch({type: CHANGE_CURRENCY_REQUEST, payload: "loading.currency"})
    dispatch(fetchProducts(currency))
    dispatch({type: CHANGE_CURRENCY_SUCCESS, payload: currency})
}

export const handleScroll = () => (dispatch, getState) => {
    const pos = getState()['views']['scrollPos']
    if (window.pageYOffset > pos && window.pageYOffset > 100) {
        dispatch({type: APPLY_MINI_HEADER})
    } else if (window.pageYOffset < pos) {
        dispatch({type: REMOVE_MINI_HEADER})
    }
    dispatch({type: SCROLL_HEIGHT, payload: window.pageYOffset})
}


//Reducer
const initialState = {
isCartOpen: false,
isMobileOpen: false,
isLoading: false,
isProcessing: false,
processingText: "",
error: "",
miniHeader: false,
scrollPos: 0,
displayCurrency: "EUR"
};

export default function reducer(state = initialState, action) {
switch(action.type) {
    case OPEN_CART:
        return { ...state, isCartOpen: true, error: "" };
    case CLOSE_CART:
        return { ...state, isCartOpen: false, error: "" };
    case OPEN_MOBILE:
        return { ...state, isMobileOpen: true, error: "" };
    case CLOSE_MOBILE:
        return { ...state, isMobileOpen: false, error: "" };
    case CHANGE_CURRENCY_SUCCESS:
        return { ...state,
            isProcessing: false,
            error: "",
            processingText: "",
            displayCurrency: action.payload 
        };
    case CHANGE_CURRENCY_REQUEST:
    case SUBMIT_PAYMENT_REQUEST:
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
    case REGISTER_REQUEST:
    case SUBMIT_ORDER_REQUEST:
    case FETCH_CART_REQUEST:
    case ORDER_FINALIZE_REQUEST:
    case UPDATE_REQUEST:
    case NEWSLETTER_REQUEST:
        return { ...state,
            isProcessing: true,
            processingText: action.payload,
            error: ""
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
    case UPDATE_SUCCESS:
    case FETCH_SUCCESS:
    case NEWSLETTER_SUCCESS:
        return { ...state,
                isProcessing: false,
                error: "",
                processingText: "" };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
    case PROMO_CART_FAILURE:
            return { 
                ...state,
                isProcessing: false,
                error: action.payload,
                processingText: "" };
    case APPLY_MINI_HEADER:
            return {
                ...state,
                miniHeader: true,
                error: ""
            }
    case REMOVE_MINI_HEADER:
            return {
                ...state,
                miniHeader: false,
                error: ""
            }
    case SCROLL_HEIGHT:
            return {
                ...state,
                scrollPos: action.payload,
                error: ""
            }
    default:
        return state;
}
}

//Selectors
export const isCartOpen = (state) => state.views.isCartOpen;

export const isMobileOpen = (state) => state.views.isMobileOpen;

export const isProcessing = (state) => state.views.isProcessing;

export const isMiniHeader = (state) => state.views.miniHeader;

export const getProcessingText = (state) => state.views.processingText;

export const getError = (state) => state.views.error;

export const getMediaSize = (state) => state.browser.mediaType;

export const getDisplayCurrency = (state) => state.views.displayCurrency;