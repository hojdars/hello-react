import React from "react"

export default function Image(props) {
    return (
        <div>
            <h1>THIS IS IMAGE</h1>
            <img src={props.obj} alt="pepe"/>
        </div>
    )
}

