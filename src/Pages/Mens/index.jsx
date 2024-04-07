import React from 'react'
import Styles from './Mens.module.css'
import { MEN } from '../Men'
import { Guys } from '../Guys'

const Mens = () => {
  return (
    <div className={Styles.shop}>
    <div className={Styles.shopTitle}>
      <h1>ME'N</h1>
    </div>
    <div className={Styles.products}>
      {" "}
      {MEN.map((product) => (
      <Guys data={product} />
    ))}</div>

    </div>
  )
}

export default Mens