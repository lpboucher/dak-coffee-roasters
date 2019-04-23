import { combineReducers } from 'redux';
import axios from 'axios';
//import _ from 'lodash';

//Action Types
export const FETCH_PRODUCTS_REQUEST = 'products/fetch_products_request';
export const FETCH_PRODUCTS_SUCCESS = 'products/fetch_products_success';
export const FETCH_PRODUCTS_FAILURE = 'products/fetch_products_failure';

//Action Creators
export const fetchProducts = () => async dispatch => {
    //dispatch({ type: FETCH_PRODUCTS_REQUEST });

    try {
        const res = await axios.get(`http://localhost:5000/api/products/`);
        console.log('fetched products----------', res.data);
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
};

//Reducers
const byId = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
        return {
            ...state,
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
        case FETCH_PRODUCTS_SUCCESS:
        return action.payload.data.map(product => product.id)
        default:
        return state
    }
    }

export default combineReducers({
    byId,
    allIds,
})

//Selectors
export const getProduct = (state, id) => state.products.byId[id];

export const getAllProducts = (state) => state.products.allIds.map(id => getProduct(state, id));