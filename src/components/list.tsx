import React, { useState } from 'react';
import './list.css';
import ItemQuantityModifierContainer from '../containers/quantity-modifier-container';
import { ProductInfo, ProductInfoInCart } from "../actions";
import { viewEnum } from "../actions";


function ListItem(props: any) {
    return (
        <div className='list-item-wrapper' style={{backgroundColor: `#${props.productInfo.colorHex}`}}>
            <div className={'list-item-name list-item-row-wrapper'}>
                { props.productInfo.nameText }
            </div>
            <div className={'list-item-image list-item-row-wrapper'}>
                picture
            </div>
            <div className={'list-item-description list-item-row-wrapper'}>
                description
            </div>
            <div className={'list-item-quantity list-item-row-wrapper'}>
                <ItemQuantityModifierContainer productInfo={props.productInfo} view={props.view} quantity={props.quantity}/>
            </div>
        </div>
    )
}

interface CartListProps {
    cartLists: Array<ProductInfoInCart>,
    total: number
}

function CartList( { cartLists, total }: CartListProps) {
    return (
        <div className={'list-wrapper'}>
            <div className={'list-heading'}>
                Your Shopping Cart
            </div>
            {cartLists ?  cartLists.map((product: ProductInfoInCart) => {
                    return (
                        <ListItem productInfo={product.productInfo} view={viewEnum.CART} quantity={product.quantity} key={`${product.productInfo.category}-${product.productInfo.nameIndex}`} />
                    )
                })
                : null
            }
            <div className={'list-price-total'}>
                    Total: ${total.toFixed(2)}
            </div>
        </div>
    )
}

interface ProductListProps {
    productLists: any,
}

function ProductList({productLists} : ProductListProps) {
    return (
        <div className={'list-wrapper'}>
            {productLists ?  productLists.map((product: ProductInfo) => {
                    return (
                        <ListItem
                            productInfo={product}
                            view={viewEnum.LISTING}
                            quantity={0}
                            key={`${product.category}-${product.nameIndex}`}/>
                    )
                })
                : null
            }
        </div>
    )
}

export interface ListPropsType {
    productLists: Array<ProductInfo>,
    view: viewEnum,
    cartLists: Array<ProductInfoInCart>,
    total: number
}

function List({ productLists, view, cartLists, total } : ListPropsType) {
    return view === 'LISTING' ? <ProductList productLists={productLists}/> : <CartList cartLists={cartLists} total={total}/>
}


export default List