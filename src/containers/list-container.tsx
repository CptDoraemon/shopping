import List from "../components/list";
import { connect } from "react-redux";
import { ListPropsType } from "../components/list";
import { ProductInfoInCart } from "../actions";

const mapStateToProps = (state: any): ListPropsType => {
    let total = 0;
    state.cartLists.map((item: ProductInfoInCart): void => {
        total += item.productInfo.price * item.quantity;
    });
    return {
        productLists: state.productLists,
        view: state.view,
        cartLists: state.cartLists,
        total: total
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