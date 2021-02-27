import React from "react";
import { Route } from "react-router-dom";
import { LocationList } from "./locations/LocationList";
import { LocationProvider } from "./locations/LocationsProvider";


export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>
    </>
  )
}