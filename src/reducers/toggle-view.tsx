enum viewEnum {
    LISTING = 'LISTING',
    CART = 'CART'
}

const toggleView = (state: string = viewEnum.LISTING, action: any) => {
    if (action.type === 'TOGGLE_VIEW') {
        return state === viewEnum.LISTING ? viewEnum.CART : viewEnum.LISTING;
    }
    return state;
};

export default toggleView