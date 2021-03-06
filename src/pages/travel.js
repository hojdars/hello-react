import React from "react"

import { graphql } from "gatsby"
import { css } from "@emotion/react"

import Layout from "../components/layout"
import { ArticleLink, ImageLink } from "../components/article_link"

import maidera_banner from "../../public/banners/madeira-banner.jpg"
// import triglav_banner from "../../public/banners/triglav-banner.jpg"
// import attersee_banner from "../../public/banners/attersee-banner.jpg"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>travels.</h1>
      <b>{data.allFile.edges.length} travel reports</b>

      {/* <ArticleLink
        to="../travels/travel_1"
        title="Traveling light is great, here's what we take"
        date="2021-02-27"
        excerpt="Traveling is cool. Traveling light is more cool. The less you carry the larger distance you can cover. Take a look at what we carry and lighten up your mood and your backpack!"
      /> */}

      <ArticleLink
        to="../travels/travel_2"
        title="Západy slunce Brno, březen"
        date="2021-03-19"
        excerpt="Jaro nás na jižní Moravě obrařilo několika malebnými západy slunce. Sice se nemůžeme dostat mimo Brno, ale to nevadí :-)"
      />

      {/* Attersee 2019 */}
      {/* <ImageLink
        to="../travels/travel_4"
        image={<img src={attersee_banner} css={css`width:100%;`} alt="attersee_banner" />}
      /> */}

      {/* Madeira 2018 */}
      <ImageLink
        to="../travels/travel_3"
        image={<img src={maidera_banner} css={css`width:100%;`} alt="madeira_Banner" />}
      />

      {/* Triglav 2017 */}
      {/* <ImageLink
        to="../travels/travel_4"
        image={<img src={triglav_banner} css={css`width:100%;`} alt="triglav_banner" />}
      /> */}

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