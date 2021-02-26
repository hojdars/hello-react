import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from 'gatsby-plugin-mdx'

const shortcodes = { Image }

export default function BlogPost({ data }) {
  const post = data.mdx

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.date}</h2>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>
            {post.body}
          </MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`
