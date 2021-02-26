import React from "react"

import Layout from "../components/layout"

import pepe_hands_up from "../../public/pepe_hands_up.jpg"

export default function Home() {
  return (
    <Layout headerText="DemoWeb">
      <div class="text">
        <h1>welcome.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut massa nunc. Praesent at aliquet est. Nulla facilisi. Nulla varius malesuada metus, ultricies commodo justo malesuada a. Maecenas condimentum diam sed justo luctus sagittis. Donec ante sem, dictum non maximus nec, placerat in urna.
        </p>

        <img src={pepe_hands_up} alt="pepe" />
      </div>
    </Layout>
  )
}
