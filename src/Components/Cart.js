import React from 'react'

export default function Cart({ cart }) {
    const cartList = cart.map(product => {
        return (<li key={product.id}>{product.name}: ${product.price.toFixed(2)}</li>
        )
    })
    let subtotal = 0
    cart.forEach(product => {
        subtotal += product.price
    })
    return (
        <div>
            <h3>Cart</h3>
            <ul>{cartList}</ul>
            <p>Subtotal: ${subtotal.toFixed(2)}</p><br />
            <p>Tax: ${(subtotal * 0.05).toFixed(2)}</p><br />
            <p>Total: ${(subtotal * 1.05).toFixed(2)}</p> <br />
        </div>
    )
}
