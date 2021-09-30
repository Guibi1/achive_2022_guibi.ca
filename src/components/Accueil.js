import React, { Component } from "react"
import { Helmet } from "react-helmet"


export default class Accueil extends Component
{
    render()
    {
        return (
            <div className="page">
                <Helmet><title>Accueil - Guibi.ca</title></Helmet>
                <h1>Accueil</h1>
                <h2>Bienvenue sur Guibi.ca</h2>
            </div>
        )
    }
}