import React from "react"

import Layout from "../components/layout"

export default function Home() {
    return (
        <Layout headerText="DemoWeb">
            <div class="text">
                <h1>travel far away.</h1>
                <p>
                    Here be traveling and outdoorsy reports from our undertakings.
                </p>
                <p>
                    <ul>
                        <li>backpacking through <b>Madeira</b></li>
                        <li>hikes from <b>Triglav National Park</b></li>
                        <li>backpacking over <b>Nizke Tatry</b></li>
                        <li>and more to come ...</li>
                    </ul>
                </p>
            </div>
        </Layout>
    )
}
