import React from "react"
import Layout from "../../components/layout"

export default function BlogPost({ data }) {
  return (
    <Layout>
      <div>
        <h1>Traveling light is great, here's what we take</h1>
        <p>2021-02-21</p>
      </div>

      <div>
        <p>
          Traveling is cool.
          Traveling light is more cool.
          The less you carry the larger distance you can cover.
          And by covering a larger distance, you see more exciting stuff!
          What's not to like.
        </p>

        <p>Here's what we have with us:</p>
        <p>
          <ul>
            <li>Tarp</li>
            <li>Sleeping bag</li>
            <li>Food</li>
          </ul>
        </p>

        <p>That's all for today folks!</p>

      </div>
    </Layout>
  )
}