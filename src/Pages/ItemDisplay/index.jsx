import React, { useContext } from 'react'
import Styles from './ItemDisplay.module.css'
import { ShopContext } from '../../Context/Shop-context'

const ItemDisplay = (props) => {
    const { id, productName, price, productImage } = props.data || {};
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
  
  return <div className={Styles.itemdisplay}>
          <div className={Styles.itemdisplayleft}>
              <div className={Styles.ItemDisplayimglist}>
                  <img src={productImage} alt='' />
                  <img src={productImage} alt='' />
                  <img src={productImage} alt='' />
                  <img src={productImage} alt='' />
              </div>
              <div className={Styles.itemdisplayimg}>
              <img src={productImage} className={Styles.ItemDisplaymainimg} alt='' />
              </div>
          </div>
          
          <div className={Styles.itemdisplayright}>
              <h1>{productName}</h1>
              <div className={Styles.itemdisplayrightstar}>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <p>{122}</p>
              </div>
              <div className={Styles.itemdisplayrightprices}>
                  <div className={Styles.itemdisplayrightprice}>
                      ${price}
                  </div>
              </div>
              <div className={Styles.itemdisplayrightdescription}>
                  
              </div>
              <div className={Styles.itemdisplayrightsize}>
                  <h1>Select Size</h1>
                  <div className={Styles.itemdisplayrightsize}>
                      <div>S</div>
                      <div>M</div>
                      <div>L</div>
                      <div>XL</div>
                      <div>XXL</div>
                  </div>
              </div>
              <button onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
              <p className={Styles.productdisplayrightcategory}><span>Category :{productName}</span></p>
              <p className={Styles.productdisplayrightcategory}><span>Tags :{productName}</span></p>
          </div>
    </div>
}

export default ItemDisplay