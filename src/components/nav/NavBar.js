import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import '../../KandyKornerLogo.png'
export const NavBar = (props) => {
    return (
        <>
        <div>
            <img src="../../KandyKornerLogo.png" className="KandyKorner-logo" alt="logo" />
        </div>
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
        </ul>
        </>
    )
}