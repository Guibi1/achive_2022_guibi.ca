import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";

export default function Header(props)
{
    return (
        <div className="header">
            <Helmet><title>{props.title} - Guibi.ca</title></Helmet>
            <h1>{props.title}</h1>
            {props.children ?
                <div className="nav">
                    {props.children}
                </div>
            : null}
            <h2>{props.caption}</h2>
        </div>
    )
}

export function HeaderLink(props)
{
    const location = useLocation();
    
    return <Link to={props.url} className={location.pathname.endsWith(props.url) ? "current" : ""}>{props.title}</Link>
}
