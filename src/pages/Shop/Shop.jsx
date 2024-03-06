import React from 'react'
import { PRODUCTS } from '../../Products';
import Product  from './product';
import "../../App.css"

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Shoping</h1>
        </div>
        <div className='products'>
          {PRODUCTS.map((product) => (
            <Product data ={product} />
          ))}
        </div>
    </div>
  )
}

// export default Shop