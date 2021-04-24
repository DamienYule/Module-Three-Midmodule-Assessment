import React, { Component } from 'react'

export default class CheckOut extends Component {
    state = { firstName: "", lastName: "", email: "", creditCard: "", zipCode: "" }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let { cart } = this.props
        let subtotal = 0
        cart.forEach(product => {
            subtotal += product.price
        })
        const { firstName, lastName, email, creditCard, zipCode } = this.state;
        if (!firstName || !lastName || !email || !creditCard || !zipCode) {
            window.alert("Input is not valid")
        } else if (creditCard.length !== 16) {
            window.alert("Credit card number is not valid")
        } else if (zipCode.length !== 5) {
            window.alert("Zip code is not valid")
        } else {
            window.alert(`Purchase complete. You will be charged $${(subtotal * 1.05).toFixed(2)}`)

        }
    }
    render() {
        const { firstName, lastName, email, creditCard, zipCode } = this.state;
        return (
            <><h3>Checkout</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name <input name="firstName" value={firstName} onChange={this.handleChange}></input></label><br />
                    <label>Last Name <input name="lastName" value={lastName} onChange={this.handleChange}></input></label><br />
                    <label>Email <input name="email" value={email} onChange={this.handleChange}></input></label><br />
                    <label>Credit Card <input name="creditCard" value={creditCard} onChange={this.handleChange}></input></label><br />
                    <label>Zip Code <input name="zipCode" value={zipCode} onChange={this.handleChange}></input></label><br />
                    <button >Buy Now</button>
                </form>
            </>
        )
    }
}
