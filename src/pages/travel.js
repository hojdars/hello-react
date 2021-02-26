import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>

      <h4>2 posts:</h4>

      <Link to="../travels/travel_1">
        <h3>Traveling light is great, here's what we take</h3>
      </Link>
      <p>2021-02-21</p>
      <p>Traveling is cool. Traveling light is more cool. </p>

      <Link to="../travels/travel_2">
        <h3>Cool places to visit</h3>
      </Link>
      <p>2021-02-20</p>
      <p>Traveling to cool places is better than traveling to boring places.</p>


    </Layout>
  )
}