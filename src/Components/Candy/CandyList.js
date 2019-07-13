import React, { Component } from 'react'

export default class CandyList extends Component {
  render() {
    return (
      <section className="candies">
      {
        this.props.candies.map(candy =>
            <div key={candy.id}>
                <p> {candy.name}  are the
                {
                  this.props.candyTypes
                  .find(candyType => candyType.id === candy.candyTypeId)
                  .name
                }
                type
                </p>
            </div>
        )
      }
      </section>
    )
  }
}
