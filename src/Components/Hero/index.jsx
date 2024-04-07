import React from 'react'
import Styles from './Hero.module.css'
import { HandWaving } from 'phosphor-react'
import { ArrowLineRight } from 'phosphor-react'
import hero_img from '../../Assets/hero.jpg'

const Hero = () => {
  return (
    <div className={Styles.hero}>
        <div className={Styles.heroLeft}>
            <h2>NEW ARRIVALS ONLY</h2>
            <div className={Styles.para}>
                <div className={Styles.heroHandIcon}>
                    <p>new</p>
                    <HandWaving size={60} color='brown' />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className={Styles.heroLatesBtn}>
                <div>Latest collection</div>
                <ArrowLineRight size={48} />
            </div>
        </div>
        <div className={Styles.heroRight}>
            <img src={hero_img} alt="hero pics" />
        </div>
    </div>
  )
}

export default Hero