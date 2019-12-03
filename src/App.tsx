import React from 'react';
import './App.css';

import Filters from "./components/filters";
import HeaderContainer from './containers/header-container';
import ListContainer from './containers/list-container';

import { getProducts } from "./actions";
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
    }

    componentDidUpdate() {
        console.log(store.getState())
    }

    render() {
        return (
            <div className="App">
                <HeaderContainer />
                <div className={'app-body-wrapper'}>
                    <Filters/>
                    <ListContainer />
                </div>
            </div>
        );
    }
}

export default App;
