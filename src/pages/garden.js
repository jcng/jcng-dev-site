import * as React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'

export const query = graphql`
query {
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            title
            tags
          }
          fields {
            slug
          }
        }
      }
    }
    allFile {
      nodes {
        name
      }
    }
  }
`

const GardenPage = ({ data }) => {
  return (
    <Layout pageTitle="Digital Garden">
      <h2>
        What am I looking at?
      </h2>
      <p>
        This isn't quite a blog, or a portfolio, or a tutorial site — it's a <strong>Digital Garden</strong>. You can think of it as a personal wiki, or an online notebook. Its a loose collection of ideas with no rules about what does or does not belong.
      </p>
      <div id="garden-post-list">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}
              </h3>
            </Link>
            <div>Tags: {node.frontmatter.tags}</div>
          </div>
        ))}
      </div>
    </Layout >
  )
}

export default GardenPage