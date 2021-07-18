import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as style from './layout.module.css'

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
    return (
        <main className={style.container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <div>{data.site.siteMetadata.title}</div>
            <nav>
                <ul className={style.navLinks}>
                    <li className={style.navLinkItem}>
                        <Link to="/" className={style.navLinkText}>Home</Link>
                    </li>
                    <li className={style.navLinkItem}>
                        <Link to="/about" className={style.navLinkText}>About</Link>
                    </li>
                    <li className={style.navLinkItem}>
                        <Link to="/garden" className={style.navLinkText}>Garden</Link>
                    </li>
                </ul>
            </nav>
            <h1>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout