import React from 'react'

export default function ProductListItem({ product, addToCart }) {

    const { description, img, name, price } = product
    return (
        <>
            <h3>{name}</h3>
            <p>Price: ${price.toFixed(2)}</p><br />
            <button onClick={() => addToCart(product)}>Add To Cart</button><br /><br />
            <img src={img} alt={name} /><br />
            <p>{description}</p>
        </>
    )
}
