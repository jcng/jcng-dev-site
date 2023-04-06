import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as style from './splash.module.css'
import "./global.css"

const Splash = ({ pageTitle, children }) => {
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
            {children}
        </main>
    )
}

export default Splash