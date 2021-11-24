import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { saveAs } from 'file-saver'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import LineList from '@material-ui/icons/RemoveSharp';

import ImageNormal from './Calcul.webp'
import ImageExemple from './ExempleCalcul.webp'
import ImageParametres from './ParametresCalcul.webp'


class Calcul extends Component
{
    handleDownload = () =>
    {
        saveAs("/files/setupCalcul.exe", "setupCalcul.exe")
    }
    
    render ()
    {
        return (
            <div className="page">
                <Helmet><title>Calcul - Guibi.ca</title></Helmet>
                <div className="title">
                    <h1>Calcul</h1>
                    <h2>Découvrez une nouvelle façon de pratiquer ses tables</h2>
                </div>

                <Grid container>
                    <Grid item xs={12} style={{ margin: "auto", padding: "20px", textAlign: "left"}}>
                        <img src={ImageNormal} className="image skeleton" alt="L'interface de calcul"/>
                    </Grid>
                    <Grid item sm={12} md={6} style={{ margin: "auto", padding: "20px", textAlign: "left"}}>
                        <Paper style={{maxWidth: "800px", margin: "auto"}}>
                            <Box border={1.5} borderColor="secondary.main" borderRadius="borderRadius" style={{padding: "15px"}}>
                                <p>
                                        Calcul est un programme qui fait pratiquer les tables d'opérations mathématiques d'une façon intuitive et facile. Avec son interface simplifiée, il convient aux jeunes comme aux grands. 
                                        <br/><br/><br/>
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
                                </p>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ margin: "auto", padding: "20px", textAlign: "left"}}>
                        <img src={ImageExemple} className="image skeleton" alt=""/>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ margin: "auto", padding: "20px", textAlign: "left"}}>
                        <img src={ImageParametres} className="image skeleton" alt=""/>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ margin: "auto", padding: "20px", textAlign: "left"}}>
                        <Paper style={{maxWidth: "800px", margin: "auto"}}>
                            <Box border={1.5} borderColor="secondary.main" borderRadius="borderRadius" style={{padding: "15px"}}>
                                <p>
                                    Grâce à la page "paramètres", vous pouvez aisément changer les opérateurs de calcul choisis, le nombre de questions et tous les autres paramètres.
                                    <br/><br/>
                                    De plus, pour vous éviter de devoir choisir vos paramètres à chaque fois que vous voulez pratiquer vos tables, Calcul peut sauvegarder vos préférences pour la prochaine fois !!!
                                </p>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
                <Button color="primary" variant="contained" onClick={() => this.handleDownload()} style={{margin: "10px"}}>Télécharger Calcul</Button>
            </div>
        )
    }
}


export default Calcul