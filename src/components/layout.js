import React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"

import layoutStyles from "./layout.module.css"

const ListLink = props => {
    return (
        <li className={layoutStyles.listLinkItem}>
            <Link to={props.to}>{props.children}</Link>
        </li>
    )
}

const Menu = () => {
    return (
        <ul className={layoutStyles.menuMain}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/travel/">Travels</ListLink>
        </ul>
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
        <Link to="/">
            <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
        </Link>
    )
}

const Header = () => {
    return (
        <div>
            <Title />
            <Menu />
        </div>
    )
}

export default function Layout(props) {
    return (
        <div className={layoutStyles.layoutMain}>
            <Header />
            {props.children}
        </div>
    )
}

