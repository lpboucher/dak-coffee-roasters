import { combineReducers } from 'redux';
import axios from 'axios';

import { getProduct, getProductIDBySlug } from './products';
import { openCartToolTip, closeCartToolTip } from './views';

//Action Types
export const FETCH_CART_REQUEST = 'cart/fetch_cart_request';
export const FETCH_CART_SUCCESS = 'cart/fetch_cart_success';
export const FETCH_CART_FAILURE = 'cart/fetch_cart_failure';
export const CLEAR_CART_SUCCESS = 'cart/clear_cart_success';

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
    dispatch({ type: FETCH_CART_REQUEST, payload: "Adding to cart..." });
    try {
        const res = await axios.post(`http://localhost:5000/api/cart/`, {id, quantity});
        console.log('adding to cart----------', res.data);
        dispatch({ type: FETCH_CART_SUCCESS, payload: res.data });
        dispatch(openCartToolTip());
        setTimeout(() => dispatch(closeCartToolTip()), 1000)
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const addDerivedToCart = (slug, data) => (dispatch, getState) => {
    dispatch({ type: FETCH_CART_REQUEST, payload: "Adding to cart..." });
    const { quantity, roast, varieties } = data;
    const derivedId = getProductIDBySlug(
        getState(),
        `${slug}_${quantity}${roast ? "_"+roast : ""}${varieties ? "_"+varieties : ""}`
        );
    const subProduct = getProduct(getState(), derivedId);
    console.log(subProduct);
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

export const clearCart = () => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:5000/api/cart/delete`);
        console.log('clearing cart----------', res.data);
        dispatch({ type: CLEAR_CART_SUCCESS });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const applyPromo = (code) => async dispatch => {
    dispatch({ type: FETCH_CART_REQUEST, payload: "Applying promotion code..." });
    try {
        const res = await axios.post(`http://localhost:5000/api/cart/promo`, code );
        console.log('promo applied!----------', res.data);
        dispatch({ type: FETCH_CART_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

const byIdDefault = {};
//Reducers
const byId = (state = byIdDefault, action) => {
    switch (action.type) {
        case FETCH_CART_SUCCESS:
        return {
            ...action.payload.data.reduce((obj, product) => {
                obj[product.id] = product
                return obj
            }, {}),
        }
        case CLEAR_CART_SUCCESS:
        return byIdDefault;
        default:
            return state
    }
}
 
const allIdsDefault = [];
const allIds = (state = allIdsDefault, action) => {
    switch (action.type) {
        case FETCH_CART_SUCCESS:
        return action.payload.data.map(product => product.id)
        case CLEAR_CART_SUCCESS:
        return allIdsDefault;
        default:
        return state
    }
}

const metaDefault = {};
const meta = (state = metaDefault, action) => {
    switch (action.type) {
        case FETCH_CART_SUCCESS:
        return {
            ...state,
            ...action.payload.meta,
        }
        case CLEAR_CART_SUCCESS:
        return metaDefault;
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

export const getAllCartItems = (state) => state.cart.allIds.reduce((result, id) => [...result, ...getCartItem(state, id)['type'] === "cart_item" ? [getCartItem(state, id)] : []], []);

export const getAllCartMeta = (state) => state.cart.meta;

export const getCartTotal = (state) => state.cart.meta.display_price;

export const getCartDiscount = (state) => {
    const promo = state.cart.allIds.find(id => getCartItem(state, id)['type'] === "promotion_item");
    if (promo) {
        return getCartItem(state, promo)['meta']['display_price']
    }
}

export const getNumberInCart = (state) => {
    const items = getAllCartItems(state);
    if (items) {
        return items.reduce((sum, item) => sum + item.quantity, 0)
    }
}