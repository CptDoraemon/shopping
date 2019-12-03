export interface ProductInfo {
    category: number;
    categoryText: string;
    nameIndex: number;
    nameText: string;
    price: number;
    unit: string;
    colorHex: string;
}

export interface ProductInfoInCart {
    productInfo: ProductInfo;
    quantity: number;
}

export enum viewEnum {
    LISTING = 'LISTING',
    CART = 'CART'
}

// export interface StoreState {
//     productLists: Array<ProductForListing>;
//     cartItems: Array<ProductInCart>;
//     view: viewEnum;
// }

export const getProducts = () => {
    const products: Array<ProductInfo> = [];
    const categoryTexts = ['fruit', 'vegetable', 'dairy', 'soft drink'];
    const unit = ['lbs', 'lbs', 'box', 'can'];
    const colorHex = ['FFB74D', 'FF8A65', '81C784', '4FC3F7'];
    for (let category=0; category<4; category++) {
        for (let i=0; i<10; i++) {
            products.push({
                category: category,
                categoryText: categoryTexts[category],
                nameIndex: i,
                nameText: `${categoryTexts[category]}-${i}`,
                price: parseFloat((Math.random() * 100).toFixed(2)),
                unit: unit[category],
                colorHex: colorHex[category]
            })
        }
    }

    return {
        type: 'GET_PRODUCTS',
        products
    }

};

export const toggleView = () => {
    return {
        type: 'TOGGLE_VIEW'
    }
};

export const addToCart = (product: ProductInfoInCart) => {
    // the process of add an item from listing to cart (always add)
    return  {
        type: 'ADD_TO_CART' as string,
        product: product as ProductInfoInCart
    }
};

export const modifyItemInCart = (product: ProductInfoInCart) => {
    // the process of modify item quantity in cart view
    return  {
        type: 'MODIFY_ITEM_IN_CART' as string,
        product: product as ProductInfoInCart
    }
};