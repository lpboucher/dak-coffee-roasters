import { combineReducers } from 'redux';
//import _ from 'lodash';

//Action Types
import { FETCH_PRODUCTS_SUCCESS, getProduct } from './products';

//Reducers
const byId = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
        return {
            ...state,
            ...action.payload.included.main_images.reduce((obj, img) => {
                obj[img.id] = img
                return obj
            }, {}),
            ...action.payload.included.files.reduce((obj, img) => {
                obj[img.id] = img
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
        return [
            ...action.payload.included.main_images.map(img => img.id),
            ...action.payload.included.files.map(img => img.id)
        ]
        default:
        return state
    }
    }

export default combineReducers({
    byId,
    allIds
})

//Selectors
export const getThumbnail = (state, id) => state.thumbnails.byId[id];

export const getAllThumbnails = (state) => state.thumbnails.allIds.map(id => getThumbnail(state, id));

export const getThumbnailsByIds = (state) => state.thumbnails.byId;

export const getThumbnailByProductId = (state, id) => {
    const product = getProduct(state, id);
    if(product) {
        return getThumbnail(state, product.relationships.main_image.data.id)
    }
};

export const getSecondaryImgByProductId = (state, id) => {
    const product = getProduct(state, id);
    if(product) {
        return product.relationships.files ? getThumbnail(state, product.relationships.files.data[0].id) : null
    }
};