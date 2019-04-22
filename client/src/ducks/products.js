import axios from 'axios';
//import _ from 'lodash';

//Action Types
export const FETCH_PRODUCTS_REQUEST = 'products/fetch_products_request';
export const FETCH_PRODUCTS_SUCCESS = 'products/fetch_products_success';
export const FETCH_PRODUCTS_FAILURE = 'products/fetch_products_failure';

//Action Creators
export const fetchProducts = () => async dispatch => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    try {
        const res = await axios.get(`http://localhost:5000/api/products/`);
        console.log('fetched products----------', res.data);
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data });
    } catch(err) {
        dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
};

//Reducer
const initialState = {
    products: [],
    loading: false,
  };

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}

//Selectors
export const getAllProductsData = (state) => {
    return state.products;
}

export const getAllProducts = (state) => {
    const productsData = getAllProductsData(state);
    return productsData.products.data;
}

export const getAllProductImages = (state) => {
    const productsData = getAllProductsData(state);
    //use try/catch block to account for undefined state on initial load
    try {
        return productsData.products.included.main_images;
    } catch (err) {
        console.log(err);
    }
}

export const getProductImagesById = (state) => {
    const images = getAllProductImages(state);
    try {
        return images.reduce((obj, item) => {
            obj[item['id']] = item;
         return obj;
       }, {})
    } catch (err) {
        console.log(err);
    }
}