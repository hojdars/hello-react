import React from "react"

import headerStyles from "./header.module.css"

export default function Header(props) {
  return (
    <div>
      <div className={headerStyles.mainHeader}>{props.headerText}</div>
      <div className={headerStyles.subHeader}>{props.headerSubText}</div>
      <hr></hr>
    </div>
  )
}