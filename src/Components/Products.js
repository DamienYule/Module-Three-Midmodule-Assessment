import React from 'react'

import ProductListItem from './ProductListItem'
export default function Products({ productData, addToCart }) {
    const productList = productData.map((product) => {
        return (
            <li key={product.id} className="ProductItem" >
                <ProductListItem product={product} addToCart={addToCart} />
            </li>
        )
    })
    return (
        <><h2>My Garage Sale</h2>
            <ul className="Products" >
                {productList}
            </ul>
        </>
    )
}
