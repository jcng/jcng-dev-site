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
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link to={node.fields.slug}>
                        <h2>
                            {node.frontmatter.title}
                        </h2>
                    </Link>
                </div>
            ))}
        </Layout >
    )
}

export default GardenPage