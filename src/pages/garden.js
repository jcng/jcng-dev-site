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
        This isn't quite a blog, or a portfolio, or a tutorial site — it's a <strong>Digital Garden</strong>. You can think of it as something like a personal wiki, or an online notebook. It's a loose collection of ideas, with no rules about what does or does not belong. Whereas a blog is a chronologically sorted collection of "completed" posts, a digital garden is composed of various connected pieces (of writing or really any other media that can be presented in a browser) in any stage of completeness. Some are scraps of ideas, others are robust projects. You'll also find that there's no particular theme to what's found here.
      </p>
      <p>
        I definitely did not come up with this idea myself! I first learned of this in a tweet from <a href="https://twitter.com/Mappletons">Maggie Appleton</a>, who has a great writeup on Digital Gardens if you're interested in the concept: <a href="https://maggieappleton.com/garden-history">A Brief History & Ethos of the Digital Garden</a>.
      </p>
      <p>
        See <a href="/about-the-garden">About the Garden</a> for more on my personal reasons for creating this, as well as the nitty gritty of how it's built.
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