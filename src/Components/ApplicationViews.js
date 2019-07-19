import React, { Component } from "react"
import {Route} from "react-router-dom"
import CandyList from './Candy/CandyList'
import CandyManager from '../Modules/CandyManager'
import StoresManager from '../Modules/StoresManager'
import EmployeeList from './Employees/EmployeeList'
import EmployeeManager from '../Modules/EmployeeManager'
import StoreList from './Stores/StoreList'
import TypesManager from '../Modules/TypesManager'



export default class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candies: [],
        candyTypes: []
    }

    componentDidMount() {
        const newState = {}
        CandyManager.getAll()
            .then(allCandies =>
            newState.candies = allCandies)

            StoresManager.getAll()
            .then(allStores => newState.stores =allStores)

            EmployeeManager.getAll()
            .then(allEmployees =>
                newState.employees = allEmployees)

            TypesManager.getAll()
            .then(candyTypes =>newState.candyTypes = candyTypes)
            .then(()=> this.setState(newState))
}

    deleteCandy = id => {
        return fetch(`http://localhost:5002/candies/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/candies`))
        .then(e => e.json())
        .then(candies => this.setState({
            candies: candies
        })
      )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/Candy" render={(props) => {

                    return <CandyList candies={this.state.candies} deleteCandy={this.deleteCandy} candyTypes={this.state.candyTypes} />
                }} />
                <Route path="/Employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />

            </React.Fragment>
        )
    }

}
