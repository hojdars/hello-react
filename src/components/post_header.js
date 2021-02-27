import React from "react"

import postHeaderStyles from "./post_header.module.css"

const PostHeader = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div className={postHeaderStyles.date}>
                {props.date}
            </div>
        </div>
    )
}

export default PostHeader