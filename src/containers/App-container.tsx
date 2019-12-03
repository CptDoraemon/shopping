import App from '../App';
import { connect } from "react-redux";
import { DispatchType } from "../index";

const mapDispatchToProps = (dispatch: DispatchType) => {
    return { dispatch };
};

export default connect(
    mapDispatchToProps
)(App)