import * as React from 'react'
import * as style from './splashlogo.module.css'
import "./global.css"

const SplashLogo = ({ children }) => {

    return (
        <div className={style.splashLogo}>
            <div className={style.splashText}>> welcome to</div>
            <div className={style.blogTitle}>jcng.me</div>
            <div className={style.blogSubtitle}>explore</div>
        </div>
    )
}

export default SplashLogo