import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import défis from "./défis.txt"


class Consequences extends Component
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
            <Container>
                <Helmet><title>Conséquences - Guibi.ca</title></Helmet>
                <Typography variant="h4" style={{marginBottom: "15px"}}>Conséquences</Typography>

                {this.state.joueursChoisis ?
                    (this.state.partieTerminée ?
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <Typography variant="h6">Partie terminée !</Typography>
                            </Grid>
                            <Grid item>
                                <Button onClick={this.rejouer} variant="contained" color="primary" style={{fontSize: "18px", width:"250px"}}>Rejouer</Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={this.changerJoueurs} variant="outlined" color="secondary">Changer les joueurs</Button>
                            </Grid>
                        </Grid> :
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <Typography variant="h6">C'est le tour de {this.state.joueurActuel}</Typography>
                                <Typography variant="body1">{this.state.défiActuel}</Typography>
                            </Grid>
                            <Grid item>
                                <Button onClick={this.brasserDe} variant="outlined" color="secondary">Brasser le dé</Button>
                                {this.state.joueurDé !== "" ? <Typography variant="body1" style={{marginTop: "5px"}}>Le dé a choisi {this.state.joueurDé} !</Typography> : null}
                            </Grid>
                            <Grid item>
                                <Button onClick={this.nouveauDéfi} variant="contained" color="primary" style={{fontSize: "18px", width:"250px"}}>Prochain défi</Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={this.changerJoueurs} variant="outlined" color="secondary">Changer les joueurs</Button>
                            </Grid>
                        </Grid>) :
                    <React.Fragment>
                        <form>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={this.addJoueur}>Ajouter un joueur</Button>
                                </Grid>
                                {this.state.joueurs.map((nom, index) =>
                                <Grid item container direction="row" spacing={1} key={index} justify="center">
                                    <Grid item>
                                        <TextField size="small" variant="outlined" label={"Nom du joueur " + (index + 1)} value={nom} onChange={(e) => this.handleChangeNom(e, index)}></TextField>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="secondary" onClick={() => this.deleteJoueur(index)}>Supprimer</Button>
                                    </Grid>
                                </Grid>)}
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={this.confirmerJoueurs} style={{fontSize: "18px", width:"350px"}}>Jouer</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </React.Fragment>}
            </Container>
        )
    }
}


export default Consequences