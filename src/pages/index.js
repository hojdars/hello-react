import React from "react"

import Header from "../components/header"
import Menu from "../components/menu"

export default function Home() {
  return (
    <div class="page">
      <Header headerText="DemoWeb" headerSubText="welcome home." />
      <Menu />
      <div class="text">
        <h1>Hello Home!</h1>
      </div>
    </div>
  )
}
