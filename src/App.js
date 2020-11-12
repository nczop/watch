import React, { Component } from "react";
import Products from "./Product"

class App extends Component {

  state = {
    products: [
      {
        id: 1,
        name: "kawa"
      },
      {
        id: 2,
        name: "herbata"
      },
      {
        id: 3,
        name: "woda"
      },
      {
        id: 4,
        name: "piwo"
      },
    ]
  }

  find = (id) => {
    const products = [...this.state.products]
    const newList = this.state.products.findIndex(newItem => newItem.id === id)
    products.splice(newList, 1)
    this.setState({
      products: products
    })
    console.log(this.state.products)
  }

  render() {
    return (
      <>
        {this.state.products.map(product =>
          <div>
            <Products
              id={product.id}
              name={product.name}
              find={this.find}
            />
          </div>)}
      </>
    )
  }
}

export default App;
