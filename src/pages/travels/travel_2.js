import React from "react"
import Layout from "../../components/layout"

export default function BlogPost({ data }) {
  return (
    <Layout>
      <div>
        <h1>Cool places to visit</h1>
        <p>2021-02-20</p>
      </div>

      <div>
        <p>
          Traveling to cool places is better than traveling to boring places.
          Some people like cities, some people like nature.
          We are the <i>nature loving kind</i>, so do not expect to find museums and architecture here.
        </p>

        <p>Having said that, here are some places we can recommend you to visit:</p>
        <p>
          <ul>
            <li>Madeira</li>
            <li>Slovenia</li>
            <li>Norway</li>
            <li>Slovakia</li>
          </ul>
        </p>

        <p>That's all for today folks!</p>

      </div>
    </Layout>
  )
}