import React, { Component} from "react"
import ApplicationViews from "./ApplicationViews"
import NavBar from "../nav/NavBar"

export default class Kandykorner extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

