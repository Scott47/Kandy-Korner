import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ProductContext = createContext()

// This component establishes what data can be used.
export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products?_expand=productType")
        .then(res => res.json())
        .then(setProducts)
    }

    /*
        You return a context provider which has the
        `products` state, `getProducts` function,
        as keys. This allows any child elements to access them.
    */
    return (
        <ProductContext.Provider value={{
            products, getProducts
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

