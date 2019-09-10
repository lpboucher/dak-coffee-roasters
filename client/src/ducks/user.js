import { combineReducers } from 'redux';
import axios from 'axios';
import i18n from "i18next";

import { getPlanIDBySlug } from './products';

//Action Types
export const LOGIN_REQUEST = 'user/login_request';
export const LOGIN_SUCCESS = 'user/login_success';
export const LOGIN_FAILURE = 'user/login_failure';
export const FETCH_REQUEST = 'user/fetch_request';
export const FETCH_SUCCESS = 'user/fetch_success';
export const FETCH_FAILURE = 'user/fetch_fail';
export const UPDATE_REQUEST = 'user/update_request';
export const UPDATE_SUCCESS = 'user/update_success';
export const UPDATE_FAILURE = 'user/update_fail';
export const REGISTER_REQUEST = 'user/register_request';
export const REGISTER_SUCCESS = 'user/register_success';
export const REGISTER_FAILURE = 'user/register_failure';
export const LOGOUT_REQUEST = 'user/logout_request';
export const LOGOUT_SUCCESS = 'user/logout_success';
export const ORDERS_REQUEST = 'user/orders_request';
export const ORDERS_SUCCESS = 'user/orders_success';
export const ORDERS_FAILURE = 'user/orders_failure';
export const NEWSLETTER_REQUEST = 'user/newsletter_request';
export const NEWSLETTER_SUCCESS = 'user/newsletter_sucess';

//Action Creators
export const fetchUser = (id, stripeId = null) => async dispatch => {
    console.log('passed id', id)
    if (stripeId == null) {
        const res = await axios.get(`/api/user/${id}`);
        console.log('logging moltin user----------', res.data);
        dispatch({ type: FETCH_SUCCESS, payload: res.data.data });
        stripeId = res.data.data.stripe_id;
    }
    try {
        const res = await axios.get(`/api/user/${stripeId}`);
        console.log('logging stripe user----------', res.data);
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
    } catch(err) {
        console.log(err)
    }
}

export const updateCustomerAddress = (id, {billingIsShipping, shipping, address}) => async dispatch => {
    dispatch({ type: UPDATE_REQUEST, payload: "loading.update" });
    const billing = billingIsShipping || !address ? shipping.address : address;
    shipping.name = shipping.address.name;
    delete shipping.address.name;
    delete billing.name;
    try {
        const res = await axios.post(`/api/user/${id}`, {address: billing, shipping} );
        console.log('logging update----------', res.data);
        dispatch({ type: UPDATE_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const updateSubscription = (subscriptionId, itemId, data) => async (dispatch, getState) => {
    dispatch({ type: UPDATE_REQUEST, payload: "loading.update" });
    const { plan, number, quantity, roast, varieties } = data;
    const planId = getPlanIDBySlug(
        getState(),
        `${plan}-subscription_${quantity}${plan === "classics" ? "_"+roast : ""}${plan === "classics" ? "_"+varieties : ""}`
    );
    try {
        const res = await axios.post(`/api/user/subscription/${subscriptionId}`, { plan: planId, number, itemId } );
        console.log('logging sub update----------', res.data);
        dispatch(fetchUser(null, getState()['user']['info']['stripe_id']));
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const pauseSubscription = (subscriptionId, reactivate=false) => async (dispatch, getState) => {
    dispatch({ type: UPDATE_REQUEST, payload: "loading.subscription.pause" });
    try {
        const res = await axios.post(`/api/user/subscription/pause/${subscriptionId}`, { coupon: !reactivate ? 'sub-pause' : null});
        console.log('logging sub pause----------', res.data);
        dispatch(fetchUser(null, getState()['user']['info']['stripe_id']));
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const cancelSubscription = (subscriptionId) => async (dispatch, getState) => {
    dispatch({ type: UPDATE_REQUEST, payload: "loading.subscription.cancel" });
    try {
        const res = await axios.post(`/api/user/subscription/cancel/${subscriptionId}`);
        console.log('logging sub cancel----------', res.data);
        dispatch(fetchUser(null, getState()['user']['info']['stripe_id']));
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const fetchUserOrders = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/user/orders/${id}`);
        console.log('logging orders----------', res.data);
        dispatch({ type: ORDERS_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const login = ({ email, password }) => async dispatch => {
    dispatch({ type: LOGIN_REQUEST, payload: "loading.account" });
    try {
        const res = await axios.post(`/api/user/login`, { email, password } );
        console.log('logging user----------', res.data);

        if (res.data.error) {
            dispatch({ type: LOGIN_FAILURE, payload: res.data.error})
        } else {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
            dispatch(fetchUser(res.data.data.customer_id));
        }
    } catch(err) {
        console.log(err)
    }
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_REQUEST, payload: "loading.logout" });
    dispatch({ type: LOGOUT_SUCCESS });
}

export const register = ({ name, email, password }) => async dispatch => {
    dispatch({ type: REGISTER_REQUEST, payload: "loading.new" });
    const language = i18n.language;
    try {
        const res = await axios.post(`/api/user/register`, { name, email, password, language } );
        console.log('registering user----------', res.data);

        if (res.data.error) {
            dispatch({ type: REGISTER_FAILURE, payload: res.data.error})
        } else {
            dispatch({ type: REGISTER_SUCCESS, payload: res.data });
            dispatch(fetchUser(res.data.data.id, res.data.data.stripe_id));
        }
    } catch(err) {
        console.log(err)
    }
}

export const addToNewsletter = (name, email, language) => dispatch => {
    dispatch({ type: NEWSLETTER_REQUEST, payload: "loading.newsletter.add" });
    try {
        //const res = await axios.post(`/api/newsletter/add`, { name, email, language } );
        //console.log('added to newsletter----------', res.data);
        axios.post(`/api/newsletter/add`, { name, email, language } );
        dispatch({ type: NEWSLETTER_SUCCESS });

        /*if (res.data.error) {
            dispatch({ type: REGISTER_FAILURE, payload: res.data.error})
        } else {
            dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        }*/
    } catch(err) {
        console.log(err)
    }
}

const initialInfo = {address: {}, shipping: {name: "", address:{}}, subscriptions: {}};
//Reducers
const info = (state = initialInfo, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        return {
            ...state,
            ...action.payload.data,
        }
        case FETCH_SUCCESS:
        case UPDATE_SUCCESS:
        return {
            ...state,
            ...action.payload,
        }
        case LOGOUT_SUCCESS:
        return initialInfo
        default:
            return state
    }
}

const initialMeta = {loggedIn: false}
const meta = (state = initialMeta, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        return {
            ...state,
            loggedIn: true
        }
        case LOGOUT_SUCCESS:
        return initialMeta
        default:
            return state
    }
}

const initialOrders = {allIds: [], byId: {}}
const orders = (state = initialOrders, action) => {
    switch (action.type) {
        case ORDERS_SUCCESS:
        return {
            ...state,
            byId: {
                    ...action.payload.data.reduce((obj, order) => {
                    obj[order.id] = order
                    return obj
                    }, {}),
                },
            allIds: action.payload.data.map(order => order.id),
            items: {
                ...action.payload.items.reduce((obj, item) => {
                    obj[item.id] = item
                    return obj
                    }, {}),
            }
        }
        default:
            return state
    }
}

export default combineReducers({
    info,
    meta,
    orders,
})

//Selectors
export const getLoggedStatus = (state) => state.user.meta.loggedIn;

export const getUser = (state) => state.user.info;

export const getUserID = (state) => state.user.info.stripe_id;

export const getUserPaymentMethod = (state) => state.user.info.invoice_settings.default_payment_method;

export const getOrder = (state, id) => state.user.orders.byId[id];

export const getAllOrders = (state) => state.user.orders.allIds.map(id => getOrder(state, id));

export const getOrdersByIds = (state) => state.user.orders.byId;

export const getUserAddress = (state) => {
    const ship = state.user.info.shipping ? 
    {
        name: state.user.info.shipping.name,
        ...state.user.info.shipping.address
    } : {
        name: "",
        address: {}
    }
    const bill = state.user.info.address ? state.user.info.address : {}
    return {
        billing: bill,
        shipping: ship
    }  
}

export const getUserSubscriptions = (state) => state.user.info.subscriptions;

