import React from "react"
import { Link } from "gatsby"

import articleLinkStyles from "./article_link.module.css"

const ArticleLink = props => {
    return (
        <div>
            <Link to={props.to}>
                <h3>{props.title}</h3>
            </Link>
            <div className={articleLinkStyles.date}>
                {props.date}
            </div>
            <div className={articleLinkStyles.excerpt}>
                {props.excerpt}
            </div>
        </div>
    )
}

export default ArticleLink