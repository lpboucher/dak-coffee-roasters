import { combineReducers } from 'redux';
import productReducer from '../ducks/products';
import collectionReducer from '../ducks/collections';
import thumbnailReducer from '../ducks/thumbnails';

export default combineReducers({
    products: productReducer,
    collections: collectionReducer,
    thumbnails: thumbnailReducer
});