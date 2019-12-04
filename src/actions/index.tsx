import { store } from "../index";

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
    const productList = localStorage.getItem('productList');
    const products: Array<ProductInfo> = [];
    if (!productList) {
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
        localStorage.setItem('productList', JSON.stringify({productList: products}));
    } else {
        JSON.parse(productList).productList.map((item: ProductInfo) => {
            products.push(item)
        })
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

// export const restoreCart = () => {
//     let cartList = localStorage.getItem('cartList');
//     const array: Array<ProductInfoInCart> = [];
//     if (cartList) {
//         cartList = JSON.parse(cartList).cartList;
//         cartList.map((item: ProductInfoInCart) => {
//             array.push(item)
//         })
//     }
//     return  {
//         type: 'RESTORE_CART' as string,
//         cartList: array
//     }
// };


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

export interface Category {
    name: string,
    isActive: boolean,
    hexColor: string
}

export const getCategories = () => {
    const storeState = store.getState();
    const view = storeState.view;

    const productLists = view === viewEnum.LISTING
        ? storeState.productLists
        : storeState.cartLists;
    const categoryNameArray: Array<string> = [];
    const categoryArray: Array<Category> = [];
    productLists.map((item: ProductInfo) => {
        const thisCategoryName = item.categoryText;
        let isCategoryExisted = false;
        categoryArray.map((category) => {
            if (category.name === thisCategoryName) {
                isCategoryExisted = true;
                return false;
            }
        });
        if (!isCategoryExisted) {
            categoryArray.push({
                name: thisCategoryName,
                isActive: false,
                hexColor: item.colorHex
            })
        }
    });
    categoryArray.splice(0, 0, {
        name: 'all',
        isActive: true,
        hexColor: '1E88E5'
    });

  return {
      type: 'GET_CATEGORIES',
      categories: categoryArray
  }
};

export const setCategory = (categoryTarget: string) => {
    return {
        type: 'SET_CATEGORY',
        categoryTarget: categoryTarget
    }
};