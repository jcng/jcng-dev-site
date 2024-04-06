import * as React from 'react'
import Splash from '../components/splash'
import SplashLogo from '../components/splashlogo'
import { Link } from 'gatsby'
import * as style from './index.module.css'

const IndexPage = () => {
  return (
    <Splash pageTitle="">
      <SplashLogo></SplashLogo>
      <ul className={style.exploreList}>
        <li><Link to="/about" className={style.navLinkText, style.navLinkAbout}>about</Link></li>
        <li><Link to="/garden" className={style.navLinkText, style.navLinkGarden}>garden</Link></li>
        <li><Link to="/books" className={style.navLinkText, style.navLinkBooks}>books</Link></li>
      </ul>
    </Splash>
  )
}

export default IndexPage

export function Head() {
  return (
    <>
      <body className="homepage" />
    </>
  )
}