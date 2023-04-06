import * as React from 'react'
import Splash from '../components/splash'
import { Link } from 'gatsby'
import * as style from './index.module.css'


const IndexPage = () => {
  return (
    <Splash pageTitle="">
      <div class={style.splashText}>> welcome to</div>
      <div class={style.blogTitle}>jcng.dev</div>
      <div class={style.blogSubtitle}>explore</div>
      <ul class={style.exploreList}>
        <li><Link to="/about" className={style.navLinkText}>about</Link></li>
        <li><Link to="/garden" className={style.navLinkText}>garden</Link></li>
      </ul>
    </Splash>
  )
}

export default IndexPage