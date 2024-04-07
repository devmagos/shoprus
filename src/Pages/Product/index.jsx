import React, { useContext } from 'react'
import Styles from './Product.module.css'
import { ShopContext } from '../../Context/Shop-context'
import { Link } from 'react-router-dom'

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {addToCart, cartItems} = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return <div className={Styles.product}>
            <Link to={`/item/${id}`}>
              <img src={productImage} alt="" className={Styles.img} />
            </Link>
            <div className={Styles.description}>
              <p>
                <strong>{productName}</strong>
              </p>
              <p>${price}</p>
            </div>
            <button className={Styles.addToCartBtn} onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
         </div>
}
