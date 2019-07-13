import React, { Component} from "react"
import ApplicationViews from "./ApplicationViews"
import NavBar from "../nav/NavBar"

export default class Kandykorner extends Component {

state = {
    stores: this.stores,
    employees: this.employees,
    candyTypes: this.candyTypes,
    candies: this.candies
}



    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

