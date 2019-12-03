import { ProductInfoInCart } from "../actions";

const cartHandler = (state: Array<ProductInfoInCart> = [], action: any) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let isUpdatingExistingItem = false;
            const updatedState = state.map(item => {
                if (
                    item.productInfo.category === action.product.productInfo.category &&
                    item.productInfo.nameIndex === action.product.productInfo.nameIndex
                ) {
                    isUpdatingExistingItem = true;
                    item.quantity += action.product.quantity;
                }

                return item;
            });

            return isUpdatingExistingItem ? updatedState : [...state, action.product];
            break;

        case 'MODIFY_ITEM_IN_CART':
            if (action.product.quantity === 0) {
                const updatedState = state.filter(item => {
                    return !(
                        item.productInfo.category === action.product.productInfo.category &&
                        item.productInfo.nameIndex === action.product.productInfo.nameIndex
                    )
                });
                return updatedState;
            } else {
                let isUpdatingExistingItem = false;
                const updatedState = state.map(item => {
                    if (
                        item.productInfo.category === action.product.productInfo.category &&
                        item.productInfo.nameIndex === action.product.productInfo.nameIndex
                    ) {
                        isUpdatingExistingItem = true;
                        item.quantity = action.product.quantity;
                    }

                    return item;
                });

                return isUpdatingExistingItem ? updatedState : [...state, action.product];
            }
            break;



        default:
            return [...state];
    }
};

export default cartHandler