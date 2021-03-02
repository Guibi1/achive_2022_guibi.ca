import React, { Component } from 'react'

import défis from "./défis.txt"


class Jeu extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {listeDéfis: [], défiActuel: "", joueurActuel: "", joueurDé: ""}
    }

    nouveauDéfi = () =>
    {
        var index = this.props.joueurs.indexOf(this.state.joueurActuel) + 1
        if (index >= this.props.joueurs.length)
            index = 0

        if (this.state.listeDéfis.length === 0)
            return this.props.partieTerminée()
        
        var défi = this.state.listeDéfis[Math.floor(Math.random() * this.state.listeDéfis.length)]
        var nouvelleListeDéfis = Array.from(this.state.listeDéfis)
        nouvelleListeDéfis.splice(nouvelleListeDéfis.indexOf(défi), 1)

        this.setState({joueurActuel: this.props.joueurs[index], défiActuel: défi, listeDéfis: nouvelleListeDéfis, joueurDé: ""})
    }

    joueurHasard = () =>
    {
        var joueurAléatoire = this.props.joueurs[Math.floor(Math.random() * this.props.joueurs.length)]

        while (joueurAléatoire === this.state.joueurActuel || joueurAléatoire === this.state.joueurDé)
            joueurAléatoire = this.props.joueurs[Math.floor(Math.random() * this.props.joueurs.length)]

        this.setState({joueurDé: joueurAléatoire})
    }

    componentDidMount = () =>
    {
        fetch(défis)
            .then(file => file.text())
            .then(text => { this.setState({listeDéfis: text.split("\n")}, this.nouveauDéfi) })
    }
    
    render()
    {  
        return (<div>
            <p>
                <h2>C'est le tour à {this.state.joueurActuel}</h2>
            </p>
            <p>{this.state.défiActuel}</p>
            <button onClick={this.joueurHasard}>Brasser le dé</button>
            { this.state.joueurDé !== "" ? <p>Personne aléatoire: {this.state.joueurDé}</p> : null }
            <p><button className="buttonJouer" onClick={this.nouveauDéfi}><span>Prochain défi</span></button></p>
            {this.state.listeDéfis.length > 1 ? (<p>{this.state.listeDéfis.length} défis restants</p>) : (<p>{this.state.listeDéfis.length} défi restant</p>)}
            <p><button onClick={this.props.changerJoueurs}>Changer les joueurs</button></p>
        </div>)
    }
}

export default Jeu