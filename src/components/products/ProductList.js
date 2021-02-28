import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductsProvider"
import { Product } from "./Product"
// import { Link } from "react-router-dom"
import "./Product.css"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => getProducts(), [])

    return (
        <div className="products">
            {
                products.map(product => {
                    return <Product key={product.id} product={product} />
                })
            }
        </div >
    )
}