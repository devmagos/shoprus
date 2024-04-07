import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Footer.module.css'
import instagram_icon from '../../Assets/instagram.png'
import facebook_icon from '../../Assets/facebook.png'
import twitter_icon from '../../Assets/twitter.png'
import linkedin_icon from '../../Assets/linkedin.png'
import footer_icon from '../../Assets/hero.jpg'

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footer_logo}>
        <img src={footer_icon} className={Styles.footer_img} alt="" />
        <p>`SHOP'R'US`</p>
      </div>
      <ul className={Styles.footer_links}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={Styles.footer_social_icons}>
        <div className={Styles.footer_icons_container}>
          <Link to="www.instagram.com">
          <img src={instagram_icon} className={Styles.footer_social_icons_img} alt="" />
          </Link>
        </div>
        <div className={Styles.footer_icons_container}>
          <Link to="www.facebook.com">
          <img src={facebook_icon} className={Styles.footer_social_icons_img} alt="" />
          </Link>
        </div>
        <div className={Styles.footer_icons_container}>
          <Link to="www.twitter.com">
          <img src={twitter_icon} className={Styles.footer_social_icons_img} alt="" />
          </Link>
        </div>
        <div className={Styles.footer_icons_container}>
        <Link to="www.whatsapp.com">
        <img src={linkedin_icon} className={Styles.footer_social_icons_img} alt="" />
        </Link>
        </div>
      </div>
      <div className={Styles.footer_copyright}>
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer