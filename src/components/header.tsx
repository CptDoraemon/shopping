import React from "react";
import './header.css';
import { toggleView } from "../actions";

interface HeaderProps {
    dispatch: any
}

function Header({dispatch} : HeaderProps) {
    return (
        <div className='header'>
            <div>
                <div className={'shopping-cart-icon'}>
                    <img src='./icons/cart-empty.svg' className={'header-cart-icon'} alt={'shopping-cart'} onClick={() => dispatch(toggleView())}/>
                </div>
            </div>
        </div>
    )
}

export default Header;