import React, { Component } from 'react'
import CheckOut from './Components/Checkout'
import Cart from './Components/Cart'
import Products from './Components/Products'
import productData from './data/productData'
import "./App.css"
export default class App extends Component {
  state = { cart: [] }
  addToCart = (product) => {
    this.setState((prevState) => ({ cart: [product, ...prevState.cart] }))
  }
  render() {
    const { cart } = this.state
    return (
      <div className="app">
        <Products productData={productData} addToCart={this.addToCart} />
        <div className="columnTwo">
          <Cart cart={cart} />
          <CheckOut cart={cart} />
        </div>
      </div>
    )
  }
}
