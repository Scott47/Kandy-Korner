import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Stores</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Candy">Candy</Link>
                    </li>
                    <li className="nav-item">
                    <input type="text" placeholder="Search" className="search form-control" onKeyPress={this.props.inputEvent} ></input>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar