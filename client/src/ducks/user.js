import { combineReducers } from 'redux';
import axios from 'axios';

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
export const LOGOUT_SUCCESS = 'user/logout_success';
export const ADDRESS_REQUEST = 'user/address_request';
export const ADDRESS_SUCCESS = 'user/address_success';
export const ADDRESS_FAILURE = 'user/address_failure';
export const ORDERS_REQUEST = 'user/orders_request';
export const ORDERS_SUCCESS = 'user/orders_success';
export const ORDERS_FAILURE = 'user/orders_failure';

//Action Creators
export const fetchUser = (id, stripeId = null) => async dispatch => {
    console.log('passed id', id)
    if (stripeId == null) {
        const res = await axios.get(`http://localhost:5000/api/user/${id}`);
        console.log('logging moltin user----------', res.data);
        dispatch({ type: FETCH_SUCCESS, payload: res.data.data });
        stripeId = res.data.data.stripe_id;
    }
    try {
        const res = await axios.get(`http://localhost:5000/api/user/${stripeId}`);
        console.log('logging stripe user----------', res.data);
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
    } catch(err) {
        console.log(err)
    }
}

export const updateCustomer = (id, updatedData) => async dispatch => {
    try {
        const res = await axios.put(`http://localhost:5000/api/user/${id}`, { updatedData } );
        console.log('logging update----------', res.data);
        dispatch({ type: UPDATE_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const fetchUserAddresses = (customer) => async dispatch => {
    try {
        const res = await axios.post(`http://localhost:5000/api/user/addresses`, { customer } );
        console.log('logging addresses----------', res.data);
        dispatch({ type: ADDRESS_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const fetchUserOrders = (token) => async dispatch => {
    try {
        const res = await axios.post(`http://localhost:5000/api/user/orders`, { token } );
        console.log('logging orders----------', res.data);
        dispatch({ type: ORDERS_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const login = ({ email, password }) => async dispatch => {
    try {
        const res = await axios.post(`http://localhost:5000/api/user/login`, { email, password } );
        console.log('logging user----------', res.data);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        dispatch(fetchUser(res.data.data.customer_id));
        //dispatch(fetchUserAddresses(res.data.data.customer_id));
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_SUCCESS });
}

export const register = ({ name, email, password }) => async dispatch => {
    try {
        const res = await axios.post(`http://localhost:5000/api/user/register`, { name, email, password } );
        console.log('registering user----------', res.data);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
}

const initialInfo = {};
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
                    }, {})
                },
            allIds: action.payload.data.map(order => order.id)
        }
        default:
            return state
    }
}

const initialAddresses = {allIds: [], byId: {}}
const addresses = (state = initialAddresses, action) => {
    switch (action.type) {
        case ADDRESS_SUCCESS:
        return {
            ...state,
            byId: {
                        ...action.payload.data.reduce((obj, address) => {
                        obj[address.id] = address
                        return obj
                    }, {})
                },
            allIds: action.payload.data.map(address => address.id)
        }
        default:
            return state
    }
}

export default combineReducers({
    info,
    meta,
    orders,
    addresses
})

//Selectors
export const getLoggedStatus = (state) => state.user.meta.loggedIn;

export const getUser = (state) => state.user.info;

export const getOrder = (state, id) => state.user.orders.byId[id];

export const getAllOrders = (state) => state.user.orders.allIds.map(id => getOrder(state, id));

export const getOrdersByIds = (state) => state.user.orders.byId;

export const getAddress = (state, id) => state.user.addresses.byId[id];

export const getAllAddresses = (state) => state.user.addresses.allIds.map(id => getAddress(state, id));

export const getAddressesByIds = (state) => state.user.addresses.byId;

/*export const getAddressByName = (state, name) => {
    const addressId = state.user.addresses.allIds.find(id => state.user.addresses.byId[id].name === name);
    const addressToShow = getAddress(state, addressId);
    return Object.keys(addressToShow).reduce((acc, add) => {acc[`shipping_address.${add}`] = addressToShow[add]; return acc}, {})
}*/

export const getAddressByName = (state, name) => {
    const addressId = state.user.addresses.allIds.find(id => state.user.addresses.byId[id].name === name);
    return getAddress(state, addressId);
}
