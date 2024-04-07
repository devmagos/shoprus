import React from 'react'
import Styles from './Shop.module.css'
import { PRODUCTS } from '../Products'
import { Product } from '../Product'

const Shop = () => {
  return (
    <div className={Styles.shop}>
      <div className={Styles.shopTitle}>
        <h1>SHOP'R'US</h1>
      </div>
      <div className={Styles.products}>
        {" "}
        {PRODUCTS.map((product) => (
        <Product data={product} />
      ))}</div>

    </div>
  )
}

export default Shop