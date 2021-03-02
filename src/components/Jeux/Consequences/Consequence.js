import React, { Component } from 'react'

import FormJoueurs from "./FormJoueurs"
import Jeu from "./Jeu"
import FinPartie from "./FinPartie"
import LockPage from "./LockPage"


class Consequences extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {listeJoueurs: ["", "", ""], choisirJoueurs: true, partieTerminée: false, motDePasseCorrect: false}
    }
    
    joueursChoisis = (joueurs) =>
    {
        
        var temp = joueurs.map(element => element.charAt(0).toUpperCase() + element.slice(1))
            
        this.setState({listeJoueurs: temp, choisirJoueurs: false, partieTerminée: false})
    }

    changerJoueurs = () =>
    {
        this.setState({choisirJoueurs: true})
    }

    recommencer = () =>
    {
        this.setState({partieTerminée: false})
    }
    
    render()
    {
        return (<main className="main-bar">
            {this.state.motDePasseCorrect !== true ?
                (<LockPage motDePasseCorrect={() => this.setState({motDePasseCorrect: true})}/>) :
                (this.state.choisirJoueurs ?
                    (<FormJoueurs joueurs={this.state.listeJoueurs} exportJoueurs={this.joueursChoisis}/>) :
                    (this.state.partieTerminée ?
                        (<FinPartie changerJoueurs={this.changerJoueurs} recommencer={this.recommencer}/>) :
                        (<Jeu changerJoueurs={this.changerJoueurs} joueurs={this.state.listeJoueurs} partieTerminée={() => this.setState({partieTerminée: true})}/>)))}
        </main>)
    }
}


export default Consequences