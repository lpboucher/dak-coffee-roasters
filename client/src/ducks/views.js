//import {  } from './trades';

//import {  } from './coins'; 

//Action Types
export const OPEN_CART = 'views/open_cart';
export const CLOSE_CART = 'views/close_cart';


//Action Creators
export const openCartToolTip = () => dispatch => {
dispatch({type: OPEN_CART})
}

export const closeCartToolTip = () => dispatch => {
dispatch({type: CLOSE_CART})
}


//Reducer
const initialState = {
isCartOpen: false,
isLoading: false
};

export default function reducer(state = initialState, action) {
switch(action.type) {
    case OPEN_CART:
        return { ...state, isCartOpen: true };
    case CLOSE_CART:
        return { ...state, isCartOpen: false };
    default:
        return state;
}
}

//Selectors
export const isCartOpen = (state) => state.views.isCartOpen;