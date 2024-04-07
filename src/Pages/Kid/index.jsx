import React from 'react'
import Styles from './Kid.module.css'
import { KIDS } from '../Kids'
import { Children } from '../Children'

const Kid = () => {
  return (
    <div className={Styles.shop}>
    <div className={Styles.shopTitle}>
      <h1>KI'DS</h1>
    </div>
    <div className={Styles.products}>
      {" "}
      {KIDS.map((product) => (
      <Children data={product} />
    ))}</div>

    </div>
  )
}

export default Kid