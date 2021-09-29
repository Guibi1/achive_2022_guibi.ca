import React, { Component } from "react"
import { Helmet } from "react-helmet"


export default class Accueil extends Component
{
    render()
    {
        return (
            <div class="page">
                <Helmet><title>Accueil - Guibi.ca</title></Helmet>
                <h1>Accueil</h1>
                <h2>Bienvenue sur Guibi.ca</h2>
            </div>
        )
    }
}