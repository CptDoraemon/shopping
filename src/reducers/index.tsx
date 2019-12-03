import { combineReducers } from 'redux';
import productLists from "./product-lists";
import toggleView from "./toggle-view";
import cartHandler from "./cartHandler";

export interface ProductForListing {
    category: number;
    categoryText: string;
    nameIndex: number;
    nameText: string;
    price: number;
    unit: string;
    colorHex: string;
}

export interface ProductInCart extends ProductForListing {
    quantity: number
}

enum viewEnum {
    LISTING = 'LISTING',
    CART = 'CART'
}

export interface StoreState {
    productLists: Array<ProductForListing>;
    cartItems: Array<ProductInCart>;
    view: viewEnum;
}


export default combineReducers({
    productLists: productLists,
    view: toggleView,
    cartLists: cartHandler
})