import React, { useContext } from 'react'
import { PRODUCTS } from '../Products'
import { ShopContext } from '../../Context/Shop-context'
import { CartItem } from './CartItem'
import Styles from './Cart.module.css'

import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className={Styles.cart}>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className={Styles.cartItems}>
      {PRODUCTS.map((product) => {
      if (cartItems[product.id] !== 0) {
        return <CartItem data={product} />;
      }
      })}
      </div>
      {totalAmount > 0 ?
      <div className={Styles.checkout}>
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/shop")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      : <h1>Your Cart is Empty</h1>}
    </div>  
  );
};

export default Cart