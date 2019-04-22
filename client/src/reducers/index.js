import { combineReducers } from 'redux';
import productReducer from '../ducks/products';
import collectionReducer from '../ducks/collections';

export default combineReducers({
    products: productReducer,
    collections: collectionReducer
});