import axios from 'axios';
//import _ from 'lodash';

//Action Types
export const FETCH_COLLECTIONS_REQUEST = 'products/fetch_products_request';
export const FETCH_COLLECTIONS_SUCCESS = 'products/fetch_collections_success';
export const FETCH_COLLECTIONS_FAILURE = 'products/fetch_collections_failure';

//Action Creators
export const fetchCollections = () => async dispatch => {
    dispatch({ type: FETCH_COLLECTIONS_REQUEST });

    try {
        const res = await axios.get(`http://localhost:5000/api/products/featured`);
        console.log('fetched featured----------', res.data);
        dispatch({ type: FETCH_COLLECTIONS_SUCCESS, payload: res.data });
    } catch(err) {
        dispatch({ type: FETCH_COLLECTIONS_FAILURE});
    }
};

//Reducer
const initialState = {
    collections: {},
    loading: false,
  };

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_COLLECTIONS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                loading: false
            };
        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}

//Selectors
export const getAllFeaturedProductsData = (state) => {
    return state;
}