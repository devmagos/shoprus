import React from 'react'
import Styles from './Womens.module.css'
import { WOMEN } from '../Women'
import { Ladies } from '../Ladies'

const Womens = () => {
  return (
    <div className={Styles.shop}>
    <div className={Styles.shopTitle}>
      <h1>WOM'EN</h1>
    </div>
    <div className={Styles.products}>
      {" "}
      {WOMEN.map((product) => (
      <Ladies data={product} />
    ))}</div>

    </div>
  )
}

export default Womens