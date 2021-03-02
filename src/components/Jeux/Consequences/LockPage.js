import React, { Component } from 'react'

import CircularProgress from "@material-ui/core/CircularProgress"
import mdp from "./mdp.txt"


class LockPage extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {vérification: false, inputMDP : "", inputOk: true}
    }

    handleChangeMDP = (event) =>
    {
        this.setState({inputMDP: event.target.value})
    }
    
    vérifierMDP = (event) =>
    {
        event.preventDefault()

        this.setState({vérification: true})
        fetch(mdp)
            .then(file => file.text())
            .then(text => 
            {
                if (this.state.inputMDP === text)
                    this.props.motDePasseCorrect()
                
                else
                    this.setState({inputOk: false})
            })
            this.setState({vérification: false})
    }
    
    render()
    {
        if (this.state.vérification)
            return (<CircularProgress/>)
        
        else
            return (<div>
                <form onSubmit={this.vérifierMDP}>
                    <input type="password" value={this.state.inputMDP} placeholder="Mot de passe" onChange={(event) => this.setState({inputMDP: event.target.value, inputOk: true})} required minLength="1" maxLength="15"/>
                </form>
                <button onClick={this.vérifierMDP} className="buttonJouer"><span>Confirmer</span></button>
                {this.state.inputOk ? null : <p>Mot de passe invalide.</p>}
            </div>)
    }
}


export default LockPage