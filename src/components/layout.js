import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as style from './layout.module.css'
import "./global.css"

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)


    // If there's no page title, we don't want a hanging "|" in the title
    let pageTitleString = ""
    if (pageTitle != "") {
        pageTitleString = pageTitle + "|"
    }

    return (
        <main className={style.container}>
            <title>{pageTitleString} {data.site.siteMetadata.title}</title>
            <div className={style.navbar}>
                <div className={style.siteLogo}><Link to="/" className={style.siteLogoLink}>{data.site.siteMetadata.title}</Link></div>
                <nav className={style.navContainer}>
                    <ul className={style.navLinks}>
                        <li className={`${style.navLinkItem} ${style.navLinkItemAbout}`}>
                            <Link to="/about" className={style.navLinkText}>about</Link>
                        </li>
                        <li className={`${style.navLinkItem} ${style.navLinkItemGarden}`}>
                            <Link to="/garden" className={style.navLinkText}>garden</Link>
                        </li>
                        <li className={`${style.navLinkItem} ${style.navLinkItemBooks}`}>
                            <Link to="/books" className={style.navLinkText}>books</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout