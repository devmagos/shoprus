import React, { useContext } from 'react'
import { ShopContext } from '../../Context/Shop-context'
import Styles from './Cart.module.css'

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className={Styles.cartItem}>
        <img src={productImage} alt="" className={Styles.img} />
        <div className={Styles.description}>
            <p>
                <p>{productName}</p>
            </p>
            <p>${price}</p>
            <div className={Styles.countHandler}>
              <button onClick={() => removeFromCart(id)}>-</button>
              <input value={cartItems[id]} onChange={(e) => updateCartItemCount((e.target.value), id)} />
              <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
