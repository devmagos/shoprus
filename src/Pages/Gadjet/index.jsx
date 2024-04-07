import React from 'react'
import Styles from './Gadjets.module.css'
import { GADJETS } from '../Gadjets'
import { Electronics } from '../Electronics'

const Gadjets = () => {
  return (
    <div className={Styles.shop}>
    <div className={Styles.shopTitle}>
      <h1>GAD'JETS</h1>
    </div>
    <div className={Styles.products}>
      {" "}
      {GADJETS.map((product) => (
      <Electronics data={product} />
    ))}</div>

    </div>
  )
}

export default Gadjets