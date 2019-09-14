import { combineReducers } from 'redux';
import axios from 'axios';
//import _ from 'lodash';

//Action Types
export const FETCH_STOCK_REQUEST = 'inventories/fetch_stock_request';
export const FETCH_STOCK_SUCCESS = 'inventories/fetch_stock_success';
export const FETCH_STOCK_FAILURE = 'inventories/fetch_stock_failure';

//Action Creators
export const fetchInventories = () => async dispatch => {
    //dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
        const res = await axios.get(`/api/products/stock`);
        dispatch({ type: FETCH_STOCK_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
};

//Reducers
const byId = (state = {}, action) => {
    switch (action.type) {
        case FETCH_STOCK_SUCCESS:
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
        case FETCH_STOCK_SUCCESS:
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
export const getProductStock = (state, id) => state.inventories.byId[id];

export const getInventories = (state) => state.inventories.allIds;