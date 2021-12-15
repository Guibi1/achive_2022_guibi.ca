import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Helmet from "react-helmet";


export default class PageNotFound extends Component
{
    render()
    {
        return (
            <div className="page">
                <Helmet><title>404 - Guibi.ca</title></Helmet>
                <div className="title">
                    <h1>404</h1>
                    <h2>Si proche de 200...</h2>
                </div>

                <div className="section">
                    <Link to="/">Retour vers l'accueil</Link>
                </div>
            </div>
        );
    }
}
