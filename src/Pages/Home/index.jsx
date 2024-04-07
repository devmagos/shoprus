import React from 'react'
import Styles from './Home.module.css'
import Hero from '../../Components/Hero'

const Home = () => {
  return (
    <div className={Styles.home}>
      <Hero />
    </div>
  )
}

export default Home