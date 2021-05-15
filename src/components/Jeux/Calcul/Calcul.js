import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { saveAs } from 'file-saver'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import LineList from '@material-ui/icons/RemoveSharp';
import ImageNormal from './Calcul.webp'
import ImageExemple from './ExempleCalcul.webp'
import ImageParametres from './ParametresCalcul.webp'


class Calcul extends Component
{
    handleDownload = () =>
    {
        saveAs("https://guibi.ca/files/Setup - Calcul - 4.4.exe")
    }
    
    render ()
    {
        return (
            <Container>
                <Helmet><title>Calcul - Guibi.ca</title></Helmet>
                <Typography variant="h4" style={{marginBottom: "10px"}}>Calcul</Typography>
                <img src={ImageNormal} alt="L'interface de calcul"/>
                <Grid container>
                    <Grid item xs={6} style={{ margin: "auto", padding: "5%", textAlign: "left"}}>
                        <Typography varient="body1">
                                Calcul est un programme qui fait pratiquer les tables de mathématiques d'une façon intuitive et facile. Avec son interface simplifiée, il convient aux jeunes comme aux grands. 
                                <br/><br/>
                                Plusieurs indicateurs au bas de la fenêtre vous disent:
                                <span style={{display: 'flex'}}>
                                    <LineList fontSize="small"/>
                                    <span>Les tables de mathématiques que vous avez sélectionnées;</span>
                                </span>
                                <span style={{display: 'flex'}}>
                                    <LineList fontSize="small"/>
                                    <span>Les opérateurs de calcul que vous voulez pratiquer;</span>
                                </span>
                                <span style={{display: 'flex'}}>
                                    <LineList fontSize="small"/>
                                    <span>Si vous autorisez ou refusez les réponses négatives.</span>
                                </span>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={{ margin: "auto"}}>
                        <img src={ImageExemple} alt=""/>
                    </Grid>
                    <Grid item xs={6} style={{ margin: "auto"}}>
                        <img src={ImageParametres} alt=""/>
                    </Grid>
                    <Grid item xs={6} style={{ margin: "auto", padding: "5%", textAlign: "left"}}>
                        <Typography varient="body1">
                            Grâce à la page "paramètres", vous pouvez aisément changer les opérateurs de calcul choisis, le nombre de questions et tous les autres paramètres.
                            <br/><br/>
                            De plus, pour vous éviter de devoir choisir vos paramètres à chaque fois que vous voulez pratiquer vos tables, Calcul peut sauvegarder vos préférences pour la prochaine fois !!!
                        </Typography>
                    </Grid>
                </Grid>
                <Button color="primary" variant="contained" onClick={() => this.handleDownload()} style={{margin: "10px"}}>Télécharger Calcul</Button>
            </Container>
        )
    }
}


export default Calcul