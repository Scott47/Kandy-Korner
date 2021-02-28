import React from "react"
import "./Location.css"

export const Location = ({ location }) => (
    <section className="location">
        {/* {console.log(location)} */}
        <h3 className="location__address">{location.address}</h3>
        <div className="location__sqft">square footage: {location.squarefeet}</div>
        {location.accessible ? <div>This location provides accessibility</div> : <div>No accessibility</div>}
    </section>
)