import { combineReducers } from 'redux';
import {responsiveStateReducer} from 'redux-responsive'
import userReducer from '../ducks/user';
import productReducer from '../ducks/products';
import collectionReducer from '../ducks/collections';
import categoryReducer from '../ducks/categories';
import thumbnailReducer from '../ducks/thumbnails';
import cartReducer from '../ducks/cart';
import checkoutReducer from '../ducks/checkout';
import paymentReducer from '../ducks/payments';
import viewReducer from '../ducks/views';

export default combineReducers({
    user: userReducer,
    browser: responsiveStateReducer,
    products: productReducer,
    collections: collectionReducer,
    categories: categoryReducer,
    thumbnails: thumbnailReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    payments: paymentReducer,
    views: viewReducer
});