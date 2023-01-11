import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`

export default function GardenPost({ data }) {
    const post = data.markdownRemark
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <h2>Tags: {post.frontmatter.tags[0]}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}