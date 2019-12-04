import React from 'react';
import './App.css';

import HeaderContainer from './containers/header-container';
import ListContainer from './containers/list-container';
import FilterContainer from './containers/filters-container';

import { getProducts } from "./actions";
import { getCategories } from "./actions";
import { DispatchType } from "./index";
import { store } from "./index";


interface AppProps {
    dispatch: DispatchType
}

interface AppState {

}

class App extends React.Component<AppProps, AppState> {

    dispatch: DispatchType;

    constructor({ dispatch }: AppProps) {
        super({ dispatch });
        this.dispatch = dispatch;
    }

    componentDidMount() {
        this.dispatch(getProducts());
        this.dispatch(getCategories());
    }

    componentDidUpdate() {
        console.log(store.getState())
    }

    render() {
        return (
            <div className="App">
                <HeaderContainer />
                <div className={'app-body-wrapper'}>
                    <FilterContainer />
                    <ListContainer />
                </div>
            </div>
        );
    }
}

export default App;
