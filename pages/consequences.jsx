import React, { Component } from 'react'

import Header from '@components/Header'


export default class Consequences extends Component
{
    constructor(props)
    {
        super(props)
        this.state = { joueurs: ["", "", ""], joueursChoisis: false, partieTerminée: false, joueurDé: "", listeDéfis: "", défiActuel: "", joueurActuel: "" }
    }

    componentDidUpdate()
    {
        if (this.state.joueursChoisis === false && this.state.joueurs.length < 3)
            this.addJoueur()
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

            this.setState({ joueurs: temp, joueursChoisis: true, partieTerminée: false, listeDéfis: this.getDéfis() }, this.nouveauDéfi)
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
        this.setState({ joueursChoisis: false })
    }

    recommencer = () =>
    {
        this.setState({ partieTerminée: false })
    }
    
    render()
    {
        return (
            <div className="page">
                <Header title="Conséquences" caption="Vérité ou conséquence... sans vérité"/>

                {this.state.joueursChoisis ?
                    (this.state.partieTerminée ?
                        <div className="section">
                            <div className="flex vertical spaced">
                                <h2>Partie terminée !</h2>
                                Voulez-vous recommencer les défis ou ajouter des joueurs ?

                                <button type="button" onClick={this.changerJoueurs}>Changer les joueurs</button>
                                <button type="button" className="big" onClick={() => this.setState({ partieTerminée: false, listeDéfis: this.getDéfis() }, this.nouveauDéfi)}>Rejouer</button>
                            </div>
                        </div>:
                        <div className="section">
                            <div className="flex vertical spaced">
                                <h2>C&apos;est le tour de {this.state.joueurActuel}</h2>
                                {this.state.défiActuel}

                                {this.state.joueurDé !== "" ? <p>Le dé a choisi {this.state.joueurDé}</p> : null}

                                <div className="flex spaced">
                                    <button type="button" onClick={this.brasserDe}>Brasser le dé</button>
                                    <button type="button" onClick={this.changerJoueurs}>Changer les joueurs</button>
                                </div>
                                <button type="button" className="big" onClick={this.nouveauDéfi}>Prochain défi</button>
                            </div>
                        </div>
                    ) :
                    <>
                        <div className="section">

                            <div className="flex vertical">
                                <button type="button" onClick={this.addJoueur}>Ajouter un joueur</button>
                                {this.state.joueurs.map((nom, index) =>
                                <div className="flex spaced" key={index}>
                                    <input type="text" placeholder={"Nom du joueur " + (index + 1)} value={nom} onChange={(e) => this.handleChangeNom(e, index)}></input>
                                    <button type="button" onClick={() => this.deleteJoueur(index)}>Supprimer</button>
                                </div>)}
                            </div>
        
                            <div className="separator"/>
                            
                            <button type="button" className="big" onClick={this.confirmerJoueurs}>Jouer</button>
                        </div>
                    </>
                }
            </div>
        )
    }


    getDéfis = () =>
    {
        return [
            `Prend un shot sans tes mains.`,
            `Raconte comment était la dernière fois que tu as fais l'amour avec le plus de détails.`,
            `Échange de chandail avec la personne du dé.`,
            `Sens l'haleine de tous les joueurs et dit qui a la pire.`,
            `Dit avec qui tu ferais l'amour parmi les joueurs.`,
            `Embrasse la personne du dé.`,
            `Prend un vêtement de chaque joueur et porte le jusqu'au prochain tour.`,
            `La personne du dé te dessine quelque chose sur les fesses.`,
            `Mettre le plus de guimauves dans sa bouche, et une personne au choix boit par guimauve.`,
            `Mange quelque chose choisi par la personne du dé sans tes mains.`,
            `Concours de calage contre la personne du dé.`,
            `La personne du dé te coupe les cheveux ou la barbe.`,
            `Liche la paupière de la personne du dé.`,
            `La personne du dé te lance 10 cheerios et tu bois pour chaque que tu échappe.`,
            `Prend un shot dans le nombril de la personne du dé.`,
            `Fait toi gifler par la personne du dé.`,
            `Mange la concoctions de trois ingrédients fait par la personne du dé.`,
            `Saute dans la piscine tout habillé.`,
            `Fait un sonne décriss.`,
            `Prend un shot de jus de citron.`,
            `Échange de pantalon avec la personne du dé pour un tour.`,
            `Met un glaçon dans tes culottes jusqu'au prochain tour.`,
            `Mange une cuillère de mayo.`,
            `Ferme les yeux et la personne du dé doit te toucher, devine c'est qui.`,
            `Donne une sucette à la personne du dé.`,
            `La personne du dé te donne une sucette.`,
            `Donne une fessé à tous les joueurs.`,
            `Liche le beurre de peanut ou nutella sur le ventre de la personne du dé.`,
            `La personne du dé doit lécher du beurre de peanut dans ton cou.`,
            `Beer pong contre la personne du dé.`,
            `Donne un massage à la personne du dé, à l'endroit de son choix, avec de la crème.`,
            `Va dans un placard avec la personne du dé (sexe opposé) pendant 5 minutes.`,
            `Dit sincèrement à la personne du dé tout ce que tu aimes physiquement et psychologiquement d’elle.`,
            `La personne du dé mange une gomme et tu dois la manger pendant 10 secondes.`,
            `Les joueurs prennent une photo de toi et elle doit aller dans ta story.`,
            `La personne du dé te dessine quelque chose dans le dos sans les mains et devine.`,
            `La personne du dé mange quelque chose, embrasse la et devine c'est quoi.`,
            `Texte "j'aurais bien aimé qu'on se colle la dernière fois qu'on s'est vu" à la première personne de ta messagerie.`,
            `Fait toi dessiner sur le front par la personne du dé.`,
            `Fait toi maquiller par la personne du dé.`,
            `Mouche toi dans les mains de la personne du dé.`,
            `Détache la brassière de la personne du dé à une main, elle se place en califourchon sur toi.`,
            `Fait une déclaration d'amour à un joueur.`,
            `Demande une question au joueur de ton choix et il doit te dire la vérité.`,
            `Vérité: as-tu déjà eu une blessure à cause de l’acte? Raconte.`,
            `Avec la personne du dé, chaque personne met un bout de réglisse dans la bouche et commence à manger, la première personne qui arrête d’avancer boit.`,
            `Fait un massage avec de la crème à un joueur du sexe opposé.`,
            `Enlève les bas de la personne du dé avec tes dents.`,
            `Embrasse la personne de ton choix.`,
        ]
    }
}
