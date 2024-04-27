import React, { useContext } from 'react'
import Styles from './Navbar.module.css'
import { ShopContext } from '../../Context/Shop-context'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

const Navbar = (props) => {
  // const { id } = props.data || {};
  const { updateCartItemCount } = useContext(ShopContext);

  return (
    <div className={Styles.nav}>
        <section>
            <h1><Link to='/'>SHOP'R'US</Link></h1>
        </section>
        <section className={Styles.nav}>
            <p><Link to='/shop'>Shop</Link></p>
            <p><Link to='/gadjets'>Gadjets</Link></p>
            <p><Link to='/men'>Men</Link></p>
            <p><Link to='/women'>Women</Link></p>
            <p><Link to='/kids'>Kids</Link></p>
            <p className={Styles.cartIcon}>
              <Link to='/cart'>
                <span>
                  <ShoppingCart size={24} />
                </span>
                <span className={Styles.cartTotalItem}>
                 {updateCartItemCount === 0 ? 0 : (e) => updateCartItemCount(e.target.value)}
                </span>
              </Link>
            </p>
        </section>
    </div>
  )
}

export default Navbar