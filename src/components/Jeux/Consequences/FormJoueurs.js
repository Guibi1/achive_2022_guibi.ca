import React, { Component } from 'react'


class FormJoueurs extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {listeJoueurs: props.joueurs, nomOk: true}
    }

    ajouterJoueur = () =>
    {
        this.setState(prevState => { return { listeJoueurs: prevState.listeJoueurs.concat([""]) } })
    }

    supprimerJoueur = (index) =>
    {
        var temp = Array.from(this.state.listeJoueurs)
        temp.splice(index, 1)
        
        this.setState({listeJoueurs: temp})
    }

    exporterJoueurs = (event) =>
    {
        event.preventDefault();
        console.log(this.state.listeJoueurs)

        if (this.state.listeJoueurs.find(element => element === "") === undefined)
            this.props.exportJoueurs(Array.from(this.state.listeJoueurs))

        else
            this.setState({nomOk: false})

        console.log(this.state.listeJoueurs)
    }

    componentDidUpdate()
    {
        if (this.state.listeJoueurs.length < 3)
            this.ajouterJoueur()
    }

    handleChangeNom = (event, index) =>
    {
        var temp = Array.from(this.state.listeJoueurs)
        temp[index] = event.target.value
        
        this.setState({listeJoueurs: temp, nomOk: true})
    }
    
    render()
    {
        return (<div style={{width: "max-content", margin: "auto"}}>
            <button onClick={this.ajouterJoueur}>Ajouter un joueur</button>
            <ul>
                {this.state.listeJoueurs.map((element, index) => <li key={index}>
                    <input type="text" value={element} placeholder="Nom du joueur" onChange={(event) => this.handleChangeNom(event, index)}/>
                    <button onClick={() => { this.supprimerJoueur(index) }}>Supprimer</button>
                </li>)}
            </ul>
            {this.state.nomOk ? null : <p>Veillez remplir tous les champs</p>}
            <button onClick={this.exporterJoueurs} className="buttonJouer"><span>Jouer !</span></button>
        </div>)
    }
}


export default FormJoueurs