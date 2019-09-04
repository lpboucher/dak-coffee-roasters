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

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const currency = getState()['views']['displayCurrency']
    dispatch({ type: FETCH_CART_REQUEST, payload: "Adding to cart..." });
    try {
        const res = await axios.post(`http://localhost:5000/api/cart/`, {id, quantity, currency});
        console.log('adding to cart----------', res.data);
        dispatch({ type: FETCH_CART_SUCCESS, payload: res.data });
        dispatch(openCartToolTip());
        setTimeout(() => dispatch(closeCartToolTip()), 1000)
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const addDerivedToCart = (slug, type, data) => (dispatch, getState) => {
    dispatch({ type: FETCH_CART_REQUEST, payload: "Adding to cart..." });
    const { quantity, roast, varieties } = data;
    let newSlug;
    if (type === "recurring") {
        newSlug = `${slug}_${quantity}${roast ? "_"+roast : ""}${varieties ? "_"+varieties : ""}`
    } else {
        const splitSlug = slug.split('_');
        newSlug = quantity === '250g' ? slug : `${splitSlug[0]}_${quantity}`
    }
    const derivedId = getProductIDBySlug(getState(), newSlug)
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

export const getCartItems = (state) => state.cart.allIds;

export const getAllCartItems = (state) => state.cart.allIds.reduce((result, id) => [...result, ...getCartItem(state, id)['type'] === "cart_item" ? [getCartItem(state, id)] : []], []);

export const getAllCartItemsWithTax = (state) => {
    return state.cart.allIds.reduce((result, id) => {
        const item = getCartItem(state, id);
        const product = getProduct(state, item.product_id)
        let newItem;
        if (item.type === "cart_item") {
            newItem = [{ ...item, tax_code: product.tax_code, recurring: product.recurring }]
        } else if (item.type === "custom_item") {
            newItem = [{ ...item }]
        } else {
            newItem = []
        }
        return [ ...result, ...newItem ]
    }, []);
}

export const getAllCartMeta = (state) => state.cart.meta;

export const getCartTotal = (state) => state.cart.meta.display_price;

export const getCartSubtotal = (state) => {
    const products = state.cart.allIds.filter(id => getCartItem(state, id)['type'] === "cart_item");
    if (products) {
        return products.reduce((sum, id) => sum + getCartItem(state, id)['value']['amount'], 0)
    }
}

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