import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Helmet from "react-helmet";


class PageNotFound extends Component
{
    render()
    {
        return (
            <div className="page">
                <Helmet><title>404 - Guibi.ca</title></Helmet>
                <h1>404</h1>
                <h2>Si proche de 200...</h2>

                <Link to="/">Retour vers l'accueil</Link>
            </div>
        );
    }
}

export default PageNotFound;