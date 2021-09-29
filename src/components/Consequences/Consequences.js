import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import défis from "./défis.txt"


export default class Consequences extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {joueurs: ["", "", "", ""], joueursChoisis: false, partieTerminée: false, joueurDé: "", listeDéfis: "", défiActuel: "", joueurActuel: ""}
    }

    componentDidUpdate()
    {
        if (this.state.joueursChoisis === false && this.state.joueurs.length < 3)
            this.addJoueur()
    }

    rejouer = () =>
    {
        fetch(défis)
            .then(file => file.text())
            .then(text => { this.setState(prevState => { return {listeDéfis: text.split("\n"), joueurActuel: prevState.joueurs[prevState.joueurs.length - 1]}}, this.nouveauDéfi) })
    }

    addJoueur = () =>
    {
        if (this.state.joueurs.length < 20)
            this.setState(prevState => { return { joueurs: prevState.joueurs.concat([""]) } })
    }

    deleteJoueur = (index) =>
    {
        var temp = Array.from(this.state.joueurs)
        temp.splice(index, 1)
        
        this.setState({joueurs: temp})
    }
    
    confirmerJoueurs = () =>
    {
        if (this.state.joueurs.every((nom) => nom !== ""))
        {
            var temp = this.state.joueurs.map(element => element.charAt(0).toUpperCase() + element.slice(1))
            
            this.setState({joueurs: temp, joueursChoisis: true, partieTerminée: false})

            this.rejouer()
        }
    }

    handleChangeNom = (event, index) =>
    {
        var letters = /^[A-Z a-z]+$/

        if (event.target.value.match(letters) || event.target.value.length === 0)
        {   
            var temp = Array.from(this.state.joueurs)
            temp[index] = event.target.value
            
            this.setState({joueurs: temp})
        }
    }

    nouveauDéfi = () =>
    {
        if (this.state.listeDéfis.length === 0)
            return this.setState({partieTerminée: true})

        var index = this.state.joueurs.indexOf(this.state.joueurActuel) + 1
        if (index >= this.state.joueurs.length)
            index = 0
        
        var défi = this.state.listeDéfis[Math.floor(Math.random() * this.state.listeDéfis.length)]
        var nouvelleListeDéfis = Array.from(this.state.listeDéfis)
        nouvelleListeDéfis.splice(nouvelleListeDéfis.indexOf(défi), 1)

        this.setState({joueurActuel: this.state.joueurs[index], défiActuel: défi, listeDéfis: nouvelleListeDéfis, joueurDé: ""})
    }

    brasserDe = () =>
    {
        var joueurAléatoire = this.state.joueurs[Math.floor(Math.random() * this.state.joueurs.length)]

        while (joueurAléatoire === this.state.joueurActuel || joueurAléatoire === this.state.joueurDé)
            joueurAléatoire = this.state.joueurs[Math.floor(Math.random() * this.state.joueurs.length)]

        this.setState({joueurDé: joueurAléatoire})
    }

    changerJoueurs = () =>
    {
        this.setState({joueursChoisis: false})
    }

    recommencer = () =>
    {
        this.setState({partieTerminée: false})
    }
    
    render()
    {
        return (
            <div class="page">
                <Helmet><title>Conséquences - Guibi.ca</title></Helmet>
                <h1>Conséquences</h1>
                <h2>Vérité ou conséquence... sans vérité</h2>

                {this.state.joueursChoisis ?
                    (this.state.partieTerminée ?
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <h3>Partie terminée !</h3>
                            </Grid>
                            <Grid item>
                                <Button onClick={this.rejouer} variant="contained" color="primary" style={{fontSize: "18px", width: "100%", maxWidth:"250px"}}>Rejouer</Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={this.changerJoueurs} variant="outlined" color="secondary">Changer les joueurs</Button>
                            </Grid>
                        </Grid> :
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <h3>C'est le tour de {this.state.joueurActuel}</h3>
                                <p>{this.state.défiActuel}</p>
                            </Grid>
                            <Grid item>
                                <Button onClick={this.brasserDe} variant="outlined" color="secondary">Brasser le dé</Button>
                                {this.state.joueurDé !== "" ? <p>Le dé a choisi {this.state.joueurDé} !</p> : null}
                            </Grid>
                            <Grid item>
                                <Button onClick={this.nouveauDéfi} variant="contained" color="primary" style={{fontSize: "18px", width: "100%", maxWidth:"250px"}}>Prochain défi</Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={this.changerJoueurs} variant="outlined" color="secondary">Changer les joueurs</Button>
                            </Grid>
                        </Grid>) :
                        <React.Fragment>
                        <Paper style={{maxWidth: "400px", margin: "10px auto"}}>
                            <Box border={1.5} borderColor="primary.main" borderRadius="borderRadius">
                                    <Button variant="contained" color="primary" onClick={this.addJoueur} style={{margin: "10px"}}>Ajouter un joueur</Button>
                                    {this.state.joueurs.map((nom, index) =>
                                    <Grid container direction="row" key={index} justify="center">
                                        <Grid item wrap="nowrap" style={{margin: "10px"}}>
                                            <TextField size="small" variant="outlined" label={"Nom du joueur " + (index + 1)} value={nom} onChange={(e) => this.handleChangeNom(e, index)}></TextField>
                                            <Button variant="outlined" color="secondary" onClick={() => this.deleteJoueur(index)} style={{height: "40px", marginLeft: "4px"}}>Supprimer</Button>
                                        </Grid>
                                    </Grid>)}
                            </Box>
                        </Paper>
                        <Grid>
                            <Button xs={6} variant="contained" color="primary" onClick={this.confirmerJoueurs} style={{fontSize: "18px", width: "100%", maxWidth:"350px"}}>Jouer</Button>
                        </Grid>
                </React.Fragment>}
            </div>
        )
    }
}