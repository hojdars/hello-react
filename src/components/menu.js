import React from "react"

import { Link } from "gatsby"

import menuStyles from "./menu.module.css"

export default function Menu() {
  return (
    <div class="menu">
       <div className={menuStyles.link}>
        <Link to="/">Home</Link>
        <Link to="/about/">About</Link>
       </div>
       <hr></hr>
    </div>
  )
}