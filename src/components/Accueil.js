import React, { Component } from "react"
import { Helmet } from "react-helmet"
import Container from "@material-ui/core/Container"

export default class Accueil extends Component
{
    render()
    {
        return (
            <Container style={{display: "block", justifyContent: "center", textAlign: "center"}}>
                <Helmet><title>Accueil - Guibi.ca</title></Helmet>
                
            </Container>
        )
    }
}