import React, { Component} from "react"
import CandyList from "./Candy/CandyList"
import EmployeeList from "./Employees/EmployeeList"
import StoreList from "./Stores/StoreList"


export default class Kandykorner extends Component {

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
        {id: 1, name: "Worse"},
        {id: 1, name: "Worser"}
    ]
    candies = [
        {id: 1, name: "Nasty Nuggets"},
        {id: 2, name: "Gooey Goobers"},
        {id: 3, name: "Sucky Suckers"},
        {id: 4, name: "Looks like Chocolate"}
    ]

state = {
    stores: this.stores,
    employees: this.employees,
    candyTypes: this.candyTypes,
    candies: this.candies
}
render() {
    return (
        <article className="kandy">
            <StoreList stores={this.state.stores} />
            <EmployeeList employees={this.state.employees} />
            <CandyList candies={this.state.candies} />
        </article>
    )
}
}