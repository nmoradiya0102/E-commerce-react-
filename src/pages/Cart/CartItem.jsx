// import React, { useContext } from 'react'
// import "../../App.css"
// import { ShopContext } from '../../context/ShopContext';

// const CartItem = (props) => {
//     const { id , productName , price , productImage , category} = props.data;
//     const { cartItems , addToCart , removeFromCart }  = useContext(ShopContext);
//   return (
//     <div className='cartItem'>
//         <img src={productImage}/>
//         <div className='description'>
//             <p><b>{productName}</b></p>
//             <p>price: ${price}</p>
//             <p>{category}</p>
//             <div className='countHandler'>
//                 <button onClick = {() => removeFromCart(id)}> - </button>
//                 <input value={cartItems[id]}/>
//                 <button onClick={() => addToCart(id)}> + </button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default CartItem


import React, { useContext } from "react";
import "../../App.css"
import { ShopContext } from "../../context/ShopContext";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price : ${price}</p>
        <div className = 'countHandler'>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem