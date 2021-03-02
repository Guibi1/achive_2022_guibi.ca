import React, { Component } from 'react'


class FinPartie extends Component
{
    render()
    {
        return(<div>
            <h2>Partie terminée !</h2>
            <p>
                <button onClick={this.props.changerJoueurs}>Changer les joueurs</button>
                <button onClick={this.props.recommencer}>Recommencer</button>
            </p>
        </div>)
    }
}


export default FinPartie