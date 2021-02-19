import React from "react"

import { Link } from "gatsby"

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

const Title = props => {
    return (
        <Link to="/">
            <h3 style={{ display: `inline` }}>{props.headerText}</h3>
        </Link>
    )
}

const Header = props => {
    return (
        <div>
            <Title headerText={props.headerText} />
            <Menu />
        </div>
    )
}

export default function Layout(props) {
    return (
        <div className={layoutStyles.layoutMain}>
            <Header headerText={props.headerText} />
            {props.children}
        </div>
    )
}