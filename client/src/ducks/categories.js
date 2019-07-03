import { combineReducers } from 'redux';
import axios from 'axios';
//import _ from 'lodash';

//Action Types
export const FETCH_CATEGORIES_REQUEST = 'collections/fetch_categories_request';
export const FETCH_CATEGORIES_SUCCESS = 'collections/fetch_categories_success';
export const FETCH_CATEGORIES_FAILURE = 'collections/fetch_categories_failure';

//Action Creators
export const fetchCategories = () => async dispatch => {
    //dispatch({ type: FETCH_COLLECTIONS_REQUEST });

    try {
        const res = await axios.get(`http://localhost:5000/api/products/categories`);
        console.log('fetched categories----------', res.data);
        dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_COLLECTIONS_FAILURE});
    }
};

//Reducers
const byId = (state = {}, action) => {
switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
    return {
        ...state,
        ...action.payload.data.reduce((obj, category) => {
            obj[category.id] = category
            return obj
        }, {})
    }
    default:
        return state
    }
}

const allIds = (state = [], action) => {
    switch (action.type) {
      case FETCH_CATEGORIES_SUCCESS:
        return action.payload.data.map(category => category.id)
      default:
        return state
    }
  }

export default combineReducers({
    byId,
    allIds
})

//Selectors
export const getCategory = (state, id) => state.categories.byId[id];

export const getAllCategories = (state) => state.categories.allIds.map(id => getCategory(state, id));

export const getCategoryBySlug = (state, slug) => {
    const categoryId = state.categories.allIds.filter(id => state.categories.byId[id].slug === slug);
    return getCategory(state, categoryId[0]);
}