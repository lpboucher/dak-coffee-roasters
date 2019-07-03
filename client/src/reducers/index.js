import { combineReducers } from 'redux';
import productReducer from '../ducks/products';
import collectionReducer from '../ducks/collections';
import categoryReducer from '../ducks/categories';
import thumbnailReducer from '../ducks/thumbnails';
import cartReducer from '../ducks/cart';
import viewReducer from '../ducks/views';

export default combineReducers({
    products: productReducer,
    collections: collectionReducer,
    categories: categoryReducer,
    thumbnails: thumbnailReducer,
    cart: cartReducer,
    views: viewReducer
});