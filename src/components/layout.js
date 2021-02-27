import React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"

import layoutStyles from "./layout.module.css"

const ListLink = props => {
    return (
        <div className={layoutStyles.listLinkItem}>
            <Link to={props.to}>{props.children}</Link>
        </div>
    )
}

const Menu = () => {
    return (
        <div className={layoutStyles.menuMain}>
            <ListLink to="/"><b>Home</b></ListLink>
            <ListLink to="/about/"><b>About</b></ListLink>
            <ListLink to="/travel/"><b>Travels</b></ListLink>
        </div>
    )
}

const Title = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                  siteMetadata {
                    title
                  }
                }
            }
        `
    )
    return (
        <div className={layoutStyles.titleMain}>
            <Link to="/">
                <h2 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h2>
            </Link>
        </div>
    )
}

const Header = () => {
    return (
        <div className={layoutStyles.headerMain}>
            <Title />
            <Menu />
        </div>
    )
}

export default function Layout(props) {
    return (
        <div className={layoutStyles.layoutMain}>
            <Header />
            <div className={layoutStyles.bodyMain}>
                {props.children}
            </div>
        </div>
    )
}

