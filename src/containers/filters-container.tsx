import { connect } from "react-redux";
import Filters from "../components/filters";
import { Category } from "../actions";

const mapStateToProps = (state: any) => {
    return {
        category: state.category as Array<Category>
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
)(Filters)