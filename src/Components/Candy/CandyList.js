import React, { Component } from 'react'
import candyPic from "./candy.svg"
import "./CandyStyle.css"



export default class CandyList extends Component {
  render() {
    return (
      <section className="candies">
      {
        this.props.candies.map(candy =>
            <div key={candy.id} className="card">
                <p> {candy.name}  Type:
                {
                  this.props.candyTypes
                  .find(candyType => candyType.id === candy.candyTypeId)
                  .name
                }
                </p>
                <div className="card-body">
                    <div className="card-title">
                        <img src={candyPic} className="icon--candy" />
                        <h5>{candy.name}</h5>
                        <button onClick={() => this.props.deleteCandy(candy.id)}
                          className="card-link">Delete
                        </button>
                    </div>
                </div>
            </div>
        )
      }
      </section>
    )
  }
}

