import React from "react";
import {addToCart, modifyItemInCart, ProductInfo, viewEnum} from "../actions";
import './list.css';

interface IProps {
    productInfo: ProductInfo
    view: viewEnum,
    dispatch: any,
    quantity: number
}

interface IState {
    quantity: number,
}

enum ButtonType {
    CONFIRM = 'CONFIRM',
    REMOVE = 'REMOVE'
}

enum ChangeQuantity {
    ADD = 'ADD',
    SUBTRACT = 'SUBTRACT',
    VALUE = 'VALUE'
}

export default class ItemQuantityModifier extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            quantity: this.props.view === viewEnum.LISTING ? 0 : this.props.quantity
        };
        this.quantityChangeHandler = this.quantityChangeHandler.bind(this);
        this.buttonHandler = this.buttonHandler.bind(this);
    }

    quantityChangeHandler(e: React.SyntheticEvent, type: ChangeQuantity) {
        let newQuantity = this.state.quantity;
        switch (type) {
            case ChangeQuantity.ADD:
                newQuantity++;
                break;
            case ChangeQuantity.SUBTRACT:
                newQuantity = newQuantity === 0 ? newQuantity : newQuantity - 1;
                break;
            case ChangeQuantity.VALUE:
                const input: string = (e.target as HTMLTextAreaElement).value;
                if (input.length === 0) {
                    newQuantity = -1;
                } else if (!input.match(/[^0-9]/ig)) {
                    newQuantity = parseInt(input);
                }
                break;
            default:
                break;
        }
        if (this.props.view === viewEnum.CART) {
            this.props.dispatch(modifyItemInCart({
                productInfo: {...this.props.productInfo},
                quantity: newQuantity
            }));
        }

        this.setState({
            quantity: newQuantity
        })
    }

    buttonHandler() {
        if (this.props.view === viewEnum.LISTING) {
            this.props.dispatch(addToCart({
                productInfo: {...this.props.productInfo},
                quantity: this.state.quantity
            }));
        } else if (this.props.view === viewEnum.CART) {
            this.props.dispatch(modifyItemInCart({
                productInfo: {...this.props.productInfo},
                quantity: 0
            }));
        }
        this.setState({quantity: 0});
    }

    render() {
        return (
            <div className={'item-quantity-modifier-wrapper'}>
                <div className={'item-quantity-modifier-column-quarter'}>
                    ${this.props.productInfo.price} / {this.props.productInfo.unit}
                </div>
                <div className={'item-quantity-modifier-column-half'}>
                    <div className={'item-quantity-modifier-subtract'} onClick={(e) => this.quantityChangeHandler(e, ChangeQuantity.SUBTRACT)}>-</div>
                    <input
                        className={'item-quantity-modifier-input'}
                        style={{backgroundColor: `#${this.props.productInfo.colorHex}`}}
                        type='text'
                        value={this.state.quantity === -1 ? '' : this.state.quantity}
                        onChange={(e) => this.quantityChangeHandler(e, ChangeQuantity.VALUE)}
                        onBlur={() => this.state.quantity === -1 ? this.setState({quantity: 0}) : null}
                    />
                    <div className={'item-quantity-modifier-add'} onClick={(e) => this.quantityChangeHandler(e, ChangeQuantity.ADD)}>+</div>
                    <div className={'item-quantity-modifier-unit'}> { this.props.productInfo.unit } </div>
                </div>
                <div className={'item-quantity-modifier-column-quarter'} onClick={this.buttonHandler}>
                    <div>
                    </div>
                    { this.props.view === viewEnum.LISTING ? <AddButton /> : <RemoveButton /> }
                </div>
            </div>
        )
    }
}

function AddButton() {
    return (
        <div className={'item-quantity-modifier-add-button'}>
            ADD
        </div>
    )
}

function RemoveButton() {
    return (
        <div className={'item-quantity-modifier-remove-button'}>
            REMOVE
        </div>
    )
}