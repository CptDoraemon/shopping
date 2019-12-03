import Header from "../components/header";
import { connect } from "react-redux";

const mapDispatchToProps = ( dispatch: any ) => {
    return {
        dispatch: dispatch
    }
};

export default connect (
    mapDispatchToProps
)(Header);