import { combineReducers } from 'redux';
import axios from 'axios';

//Action Types
export const LOGIN_REQUEST = 'user/login_request';
export const LOGIN_SUCCESS = 'user/login_success';
export const LOGIN_FAILURE = 'user/login_failure';
export const REGISTER_REQUEST = 'user/register_request';
export const REGISTER_SUCCESS = 'user/register_success';
export const REGISTER_FAILURE = 'user/register_failure';

//Action Creators
export const login = ({ email, password }) => async dispatch => {
    try {
        const res = await axios.post(`http://localhost:5000/api/user/login`, { email, password } );
        console.log('logging user----------', res.data);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
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

//Reducers
const byId = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        console.log(action.payload.data);
        return {
            ...state,
            [action.payload.data.customer_id]: {...action.payload.data}
        }
        default:
            return state
    }
}

const meta = (state = {loggedIn: false}, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        return {
            ...state,
            loggedIn: true
        }
        default:
            return state
    }
}

export default combineReducers({
    byId,
    meta
})

//Selectors
export const getLoggedStatus = (state) => state.user.meta.loggedIn;
