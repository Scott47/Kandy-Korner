import React, { Component } from 'react'

export default class StoreList extends Component {
  render() {
      console.log(this.props)
    return (
      <section className="stores">
      {
        this.props.stores.map(stores =>
            <div key={stores.id}>
                {stores.name}
            </div>
        )
      }
      </section>
    )
  }
}