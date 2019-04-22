import { combineReducers } from 'redux';
import productReducer from '../ducks/products';

export default combineReducers({
    products: productReducer,
});