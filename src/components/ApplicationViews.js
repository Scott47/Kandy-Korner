import React from "react";
import { Route } from "react-router-dom";
import { LocationList } from "./locations/LocationList";
import { LocationProvider } from "./locations/LocationsProvider";
import { ProductList } from "./products/ProductList";
import { ProductProvider } from "./products/ProductsProvider";


export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>
      <ProductProvider>
        <Route exact path="/products">
          <ProductList />
        </Route>
      </ProductProvider>
    </>
  )
}