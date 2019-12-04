import List from "../components/list";
import { connect } from "react-redux";
import { ListPropsType } from "../components/list";
import { ProductInfo, ProductInfoInCart } from "../actions";
import { viewEnum } from "../actions";
import { Category } from "../actions";

const mapStateToProps = (state: any): ListPropsType => {
    // calc total price
    let total = 0;
    state.cartLists.map((item: ProductInfoInCart): void => {
        total += item.productInfo.price * item.quantity;
    });
    // apply filter
    const productLists = state.productLists;
    const cartLists = state.cartLists;
    const view = state.view;
    const category = state.category;
    const activeCategory: Array<string> = [];
    if (category.length && !category[0].isActive) {
        // if not showing all categories
        category.map((category: Category) => {
            if (category.isActive) activeCategory.push(category.name)
        });
    } else {
        category.map((category: Category) => activeCategory.push(category.name));
    }

    if (view === viewEnum.LISTING) {
        const filteredProductLists = productLists.filter((item: ProductInfo) => {
            return activeCategory.indexOf(item.categoryText) !== -1
        });
        return {
            productLists: filteredProductLists,
            view,
            cartLists,
            total: total
        }
    } else {
        const filteredCartLists = cartLists.filter((item: ProductInfoInCart) => {
            return activeCategory.indexOf(item.productInfo.categoryText) !== -1
        });
        return {
            productLists: productLists,
            view,
            cartLists: filteredCartLists,
            total: total
        }
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);