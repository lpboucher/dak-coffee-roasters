import { combineReducers } from 'redux';
import axios from 'axios';

import { getProductIDBySlug } from './products';
import { openCartToolTip, closeCartToolTip } from './views';

//Action Types
export const FETCH_CART_REQUEST = 'cart/fetch_cart_request';
export const FETCH_CART_SUCCESS = 'cart/fetch_cart_success';
export const FETCH_CART_FAILURE = 'cart/fetch_cart_failure';

//Action Creators
export const fetchCartItems = () => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:5000/api/cart/`);
        console.log('receiving cart----------', res.data);
        dispatch({ type: FETCH_CART_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const addToCart = (id, quantity) => async dispatch => {
    try {
        const res = await axios.post(`http://localhost:5000/api/cart/`, {id, quantity});
        console.log('adding to cart----------', res.data);
        dispatch({ type: FETCH_CART_SUCCESS, payload: res.data });
        dispatch(openCartToolTip());
        setTimeout(() => dispatch(closeCartToolTip()), 1500)
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const addDerivedToCart = (slug, data) => (dispatch, getState) => {
    const derivedId = getProductIDBySlug(getState(), `${slug}-${data.quantity}`);
    dispatch(addToCart(derivedId, "1"));
}

export const updateItem = (id, quantity) => async dispatch => {
    try {
        const res = await axios.post(`http://localhost:5000/api/cart/${id}`, {quantity});
        console.log('updating cart----------', res.data);
        dispatch({ type: FETCH_CART_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const removeItem = (id) => async dispatch => {
    try {
        const res = await axios.delete(`http://localhost:5000/api/cart/${id}`);
        console.log('deleting from cart----------', res.data);
        dispatch({ type: FETCH_CART_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}


//Reducers
const byId = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CART_SUCCESS:
        return {
            ...action.payload.data.reduce((obj, product) => {
                obj[product.id] = product
                return obj
            }, {}),
        }
        default:
            return state
    }
}
    
const allIds = (state = [], action) => {
    switch (action.type) {
        case FETCH_CART_SUCCESS:
        return action.payload.data.map(product => product.id)
        default:
        return state
    }
}

const meta = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CART_SUCCESS:
        return {
            ...state,
            ...action.payload.meta,
        }
        default:
        return state
    }
}

export default combineReducers({
    byId,
    allIds,
    meta
})

//Selectors
export const getCartItem = (state, id) => state.cart.byId[id];

export const getAllCartItems = (state) => state.cart.allIds.map(id => getCartItem(state, id));

export const getAllCartMeta = (state) => state.cart.meta;

export const getCartTotal = (state) => state.cart.meta.display_price;

export const getNumberInCart = (state) => {
    const items = getAllCartItems(state);
    if (items) {
        return items.reduce((sum, item) => sum + item.quantity, 0)
    }
}