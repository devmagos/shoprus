import React, { useContext } from 'react'
import Styles from './Ladies.module.css'
import { ShopContext } from '../../Context/Shop-context'
import { Link } from 'react-router-dom'

export const Ladies = (props) => {
  const { id, productName, price, womenWearImage } = props.data;
  const {addToCart, cartItems} = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
            return <div className={Styles.product}>
              <Link to={`/item`}>
                <img src={womenWearImage} alt="" className={Styles.img} />
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
