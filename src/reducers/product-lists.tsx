export interface ProductForListing {
    category: number;
    categoryText: string;
    nameIndex: number;
    nameText: string;
    price: number;
    unit: string;
    colorHex: string;
}

const productLists = (state: Array<any> = [], action: any) => {
    switch(action.type) {
        case 'GET_PRODUCTS':
            return [...action.products];
        default:
            return state;
    }
};

export default productLists;