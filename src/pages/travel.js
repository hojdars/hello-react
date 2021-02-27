import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import ArticleLink from "../components/article_link"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>travels.</h1>
      <b>{data.allFile.edges.length} travel reports</b>

      <ArticleLink
        to="../travels/travel_3"
        title="Madeira 2018"
        date="2018"
        excerpt="Madeira is cool. We saw it! Don't believe me? Look no further!"
      />

      <ArticleLink
        to="../travels/travel_1"
        title="Traveling light is great, here's what we take"
        date="2021-02-27"
        excerpt="Traveling is cool. Traveling light is more cool. The less you carry the larger distance you can cover. Take a look at what we carry and lighten up your mood and your backpack!"
      />

      <ArticleLink
        to="../travels/travel_2"
        title="Cool places to visit"
        date="2021-02-20"
        excerpt="Traveling to cool places is better than traveling to boring places. Some people like cities, some people like nature. Which of those are we? Read more and find out!"
      />
    </Layout>
  )
}

export const query = graphql`
query TravelPages {
  allFile(filter: {extension: {regex: "/(js)|(md)|(mdx)/"}, relativeDirectory: {eq: "pages/travels"}}) {
    edges {
      node {
        id
        name
        relativePath
      }
    }
  }
}
`