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

        <h2>To the paradise city</h2>
        <p>
        Nunc suscipit pulvinar luctus. Phasellus quis leo non turpis placerat congue. Fusce lacinia felis elit, non euismod felis gravida eu. Donec ipsum felis, luctus et dignissim eu, elementum id felis. Ut ac aliquam turpis. Ut vel sollicitudin mi. Praesent tincidunt lacus ut auctor luctus. Praesent condimentum sapien at urna suscipit, vel mattis quam tincidunt.
        </p>

        <h3>To the paradise city</h3>
        <p>
        Nunc suscipit pulvinar luctus. Phasellus quis leo non turpis placerat congue. Fusce lacinia felis elit, non euismod felis gravida eu. Donec ipsum felis, luctus et dignissim eu, elementum id felis. Ut ac aliquam turpis. Ut vel sollicitudin mi. Praesent tincidunt lacus ut auctor luctus. Praesent condimentum sapien at urna suscipit, vel mattis quam tincidunt.
        </p>

        <h4>To the paradise city</h4>
        <p>
        Nunc suscipit pulvinar luctus. Phasellus quis leo non turpis placerat congue. Fusce lacinia felis elit, non euismod felis gravida eu. Donec ipsum felis, luctus et dignissim eu, elementum id felis. Ut ac aliquam turpis. Ut vel sollicitudin mi. Praesent tincidunt lacus ut auctor luctus. Praesent condimentum sapien at urna suscipit, vel mattis quam tincidunt.
        </p>
        <p>
        Nunc suscipit pulvinar luctus. Phasellus quis leo non turpis placerat congue. Fusce lacinia felis elit, non euismod felis gravida eu. Donec ipsum felis, luctus et dignissim eu, elementum id felis. Ut ac aliquam turpis. Ut vel sollicitudin mi. Praesent tincidunt lacus ut auctor luctus. Praesent condimentum sapien at urna suscipit, vel mattis quam tincidunt.
        </p>

        <img src={pepe_hands_up} alt="pepe" />
      </div>
    </Layout>
  )
}
