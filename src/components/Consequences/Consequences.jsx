import React, { Component } from 'react'

import Header from 'components/Header'
import défis from "./défis.txt"


export default class Consequences extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {joueurs: ["", "", ""], joueursChoisis: false, partieTerminée: false, joueurDé: "", listeDéfis: "", défiActuel: "", joueurActuel: ""}
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
            .then(text => { this.setState(prevState => { return {listeDéfis: text.split("\n"), joueurActuel: prevState.joueurs[prevState.joueurs.length - 1], partieTerminée: false}}, this.nouveauDéfi) })
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
            <div className="page">
                <Header title="Conséquences" caption="Vérité ou conséquence... sans vérité"/>

                {this.state.joueursChoisis ?
                    (this.state.partieTerminée ?
                        <div className="section">
                            <div className="purple-border flex vertical spaced" style={{width: "max(5em, 55vw)"}}>
                                <h2>Partie terminée !</h2>
                                Voulez-vous recommencer les défis ou ajouter des joueurs ?

                                <button type="button" onClick={this.changerJoueurs}>Changer les joueurs</button>
                                <button type="button" onClick={this.rejouer}>Rejouer</button>
                            </div>
                        </div>:
                        <div className="section">
                            <div className="purple-border flex vertical spaced" style={{width: "max(5em, 55vw)"}}>
                                <h2>C'est le tour de {this.state.joueurActuel}</h2>
                                {this.state.défiActuel}

                                {this.state.joueurDé !== "" ? <p>Le dé a choisi {this.state.joueurDé}</p> : null}
                                <button type="button" onClick={this.brasserDe}>Brasser le dé</button>
                                <button type="button" onClick={this.nouveauDéfi}>Prochain défi</button>
                                <button type="button" onClick={this.changerJoueurs}>Changer les joueurs</button>
                            </div>
                        </div>
                    ) :
                    <React.Fragment>
                        <div className="section">
                            <div className="purple-border flex vertical spaced" style={{width: "max(5em, 55vw)"}}>
                                {this.state.joueurs.map((nom, index) =>
                                <div className="flex" style={{width: "fit-content", gap: "max(1em, 1.1vw)"}}>
                                    <input type="text" label={"Nom du joueur " + (index + 1)} value={nom} onChange={(e) => this.handleChangeNom(e, index)}></input>
                                    <button type="button" onClick={() => this.deleteJoueur(index)}>Supprimer</button>
                                </div>)}
                                <button type="button" onClick={this.addJoueur}>Ajouter un joueur</button>
                            </div>

                            <div className="separator"/>

                            <button type="button" onClick={this.confirmerJoueurs}>Jouer</button>
                        </div>
                    </React.Fragment>
                }
            </div>
        )
    }
}
