import React, { Component } from "react"
import CandyList from './Candy/CandyList'
import EmployeeList from './Employees/EmployeeList'
import StoreList from './Stores/StoreList'
import {Route} from "react-router-dom"

export default class ApplicationViews extends Component {

    stores = [
    {id: 1, name: "Kandy Jones"},
    {id: 2, name: "Sugar High" },
    {id: 3, name: "Cavity Factory"},
    {id: 4, name: "Tonge Coaters"}
    ]
    employees = [
        {id: 1, name: "Toothless Tommy"},
        {id: 2, name: "Rotten Ricky"},
        {id: 3, name: "Danny Diabetes"},
        {id: 4, name: "Large Marge"}
    ]
    candyTypes = [
        {id: 1, name: "Bad"},
        {id: 2, name: "Worse"},
        {id: 3, name: "Worser"}
    ]
    candies = [
        {id: 1, candyTypeId: 1, name: "Nasty Nuggets"},
        {id: 2, candyTypeId: 1, name: "Gooey Goobers"},
        {id: 3, candyTypeId: 2, name: "Sucky Suckers"},
        {id: 4, candyTypeId: 1, name: "Looks like Chocolate"}
    ]


    state = {
        locations: [],
        animals: [],
        employees: []
    }


render() {
    return (
        <React.Fragment>
            <Route exact path="/" render={(props) => {
                return <StoreList stores={this.state.stores} />
            }} />
            <Route path="/Candy" render={(props) => {
                return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} />
            }} />
            <Route path="/Employees" render={(props) => {
                return <EmployeeList employees={this.state.employees} />
            }} />

        </React.Fragment>
    )
}

}
