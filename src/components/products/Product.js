import React from 'react'
import './Product.css'

export const Product = ( { product } ) => {
    return (
        <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__productType"><strong>type: </strong>{product.productType.name}</div>
        <div className="product__description"><strong>description: </strong>{product.description}</div>
        <div className="product__price"><strong>price: </strong>${product.price.toFixed(2)}</div>
    </section>
    )
}