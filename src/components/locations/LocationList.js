import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationsProvider"
import { Location } from "./Location"
// import { Link } from "react-router-dom"
import "./Location.css"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => getLocations(), [])

    return (
        <div className="locations">
            {
                locations.map(location => {
                    return <Location key={location.id} location={location} />
                })
            }
        </div >
    )
}