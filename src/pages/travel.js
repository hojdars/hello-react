import React from "react"

import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

export default function Home({data}) {
    return (
        <Layout>
        <div>
            <h4>{data.allMdx.totalCount} Posts</h4>
            {data.allMdx.edges.map(({ node }) => (
              <div key={node.id}>
                <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}
                </h3>
                </Link>
                <p>
                <i>— {node.frontmatter.date}</i>
                </p>
                <p>{node.excerpt}</p>
              </div>
            ))}
        </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
