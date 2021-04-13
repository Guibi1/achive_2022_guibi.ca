import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import OIcon from '@material-ui/icons/RadioButtonUnchecked'
import XIcon from '@material-ui/icons/Close'


const X = <XIcon fontSize="large"/>
const O = <OIcon fontSize="large"/>
const vide = null


class TicTacToe extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {joueurActuel: X, plateau: [[vide, vide, vide], [vide, vide, vide], [vide, vide, vide]], gagnant: "", plateauGagnant: [[false, false, false], [false, false, false], [false, false, false]]}
    }

    nouvellePartie = () =>
    {
        this.setState({joueurActuel: X, plateau: [[vide, vide, vide], [vide, vide, vide], [vide, vide, vide]], gagnant: "", plateauGagnant: [[false, false, false], [false, false, false], [false, false]]})
    }

    jouer = (row, index) =>
    {
        if (this.state.gagnant === "")
        {
            if (this.state.plateau[row][index] === vide)
            {
                var temp = Array.from(this.state.plateau)
                temp[row].splice(index, 1, this.state.joueurActuel)

                this.setState({plateau: temp}, this.vérifierVictoire())

                this.setState(prevState => { return {joueurActuel: (prevState.joueurActuel === X) ? O : X} })
            }
        }
    }

    vérifierVictoire = () =>
    {
        // Partie nulle
        if (this.state.plateau.every(row => row.every(element => element !== vide)))
            this.setState({gagnant: vide})
        
        
        // Vertical
        this.state.plateau.forEach((row, rowIndex) => {
            if (row.every(element => { return element === this.state.joueurActuel }))
            {
                var temp = Array.from(this.state.plateauGagnant)
                temp[rowIndex] = [true, true, true]

                this.setState(prevState => { return {gagnant: prevState.joueurActuel, plateauGagnant: temp} })
                return
            }
        })


        // Horizontal
        for (let i = 0; i < 3; i++)
        {
            if (this.state.plateau.every(row => { return row[i] === this.state.joueurActuel }))
            {
                let temp = Array.from(this.state.plateauGagnant)
                temp.forEach(row => row[i] = true)

                this.setState(prevState => { return {gagnant: prevState.joueurActuel, plateauGagnant: temp} })
                return
            }
        }


        // Diagonale \
        if (this.state.plateau.every((row, rowIndex) => { return row[rowIndex] === this.state.joueurActuel }))
        {
            let temp = Array.from(this.state.plateauGagnant)
            temp.forEach((row, rowIndex) => row[rowIndex] = true)

            this.setState(prevState => { return {gagnant: prevState.joueurActuel, plateauGagnant: temp} })
            return
        }

        
        // Diagonale /
        if (this.state.plateau.every((row, rowIndex) => { return row[rowIndex === 1 ? 1 : rowIndex === 0 ? 2 : 0] === this.state.joueurActuel }))
        {
            let temp = Array.from(this.state.plateauGagnant)
            temp.forEach((row, rowIndex) => row[rowIndex === 1 ? 1 : rowIndex === 0 ? 2 : 0] = true)

            this.setState(prevState => { return {gagnant: prevState.joueurActuel, plateauGagnant: temp} })
            return
        }
    }
    
    render()
    {
        return (
            <Container>
                <Helmet><title>Tic Tac Toe - Guibi.ca</title></Helmet>
                <Grid style={{margin: "auto", padding: "0px", justifyContent: "center"}}>
                    {this.state.plateau.map((row, rowIndex) =>
                    <Grid key={rowIndex}>
                        {row.map((element, index) =>
                        <Button className={this.state.plateauGagnant[rowIndex][index] ? "tuileTicTacToeGagnant" : "tuileTicTacToe"} onClick={() => this.jouer(rowIndex, index)}>
                            {element}
                        </Button>)}
                    </Grid>)}
                </Grid>

                {this.state.gagnant === "" ? <p>C'est le tour aux {this.state.joueurActuel}.</p> : ( this.state.gagnant === vide ? <p>Partie nulle !</p> : <p>Les {this.state.gagnant} ont gagné !</p>)}
                <Button variant="contained" className="buttonJouer" onClick={this.nouvellePartie}><span>{this.state.gagnant !== "" ? "Recommencer" : "Rejouer"}</span></Button>
            </Container>
        )
    }
}


export default TicTacToe