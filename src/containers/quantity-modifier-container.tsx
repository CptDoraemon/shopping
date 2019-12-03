import ItemQuantityModifier from "../components/quantity-modifier";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch
    }
};

export default connect(
    mapDispatchToProps
)(ItemQuantityModifier)