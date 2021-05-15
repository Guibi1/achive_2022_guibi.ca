import React, { Component } from "react"
import { Helmet } from "react-helmet"
import Container from "@material-ui/core/Container"
import Typography from '@material-ui/core/Typography'


export default class Accueil extends Component
{
    render()
    {
        return (
            <Container>
                <Helmet><title>Accueil - Guibi.ca</title></Helmet>
                <Typography variant="h3">Accueil</Typography>
                <Typography variant="h5" style={{marginBottom: "10px"}}>Bienvenue sur Guibi.ca</Typography>
            </Container>
        )
    }
}