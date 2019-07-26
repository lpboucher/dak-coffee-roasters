import { combineReducers } from 'redux';
import axios from 'axios';
//import _ from 'lodash';

import { getCollectionBySlug } from './collections';
import { getCategoryBySlug } from './categories';
import { getThumbnailByProductId } from './thumbnails';

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

export const getProductIDBySlug = (state, slug) => state.products.allIds.find(id => state.products.byId[id].slug === slug);

export const getProductBySlug = (state, slug) => {
    const productId = getProductIDBySlug(state, slug);
    if (productId) {
        return {
            ...getProduct(state, productId),
            ...getThumbnailByProductId(state, productId)
        }
    }
}

export const getAllProducts = (state) => state.products.allIds.map(id => getProduct(state, id));

export const getProductsByIds = (state) => state.products.byId;

export const getProductsByCollection = (state, slug) => {
    const featured = getCollectionBySlug(state, slug);
    if(featured) {
        return featured.relationships.products.data.map(product => {
            return {
                product: {...getProduct(state, product.id)},
                thumb: {...getThumbnailByProductId(state, product.id)}
            }
        });
    }
}

export const getProductsByCategory = (state, slug) => {
    const category = getCategoryBySlug(state, slug);
    if(category) {
        return category.relationships.products.data.map(product => {
            return {
                product: {...getProduct(state, product.id)},
                thumb: {...getThumbnailByProductId(state, product.id)}
            }
        });
    }
}