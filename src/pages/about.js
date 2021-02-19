import React from "react"

import Header from "../components/header"
import Menu from "../components/menu"

export default function Home() {
  return (
    <div class="page">
      <Header headerText="DemoWeb" headerSubText="about the DemoWeb" />
      <Menu />
      <div class="text">
        <h1>Hello About!</h1>
      </div>
    </div>
  )
}
