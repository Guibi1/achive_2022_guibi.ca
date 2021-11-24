import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { saveAs } from 'file-saver'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

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

                <div className="section">
                    <img src={ImageNormal} className="skeleton" alt="L'interface de calcul"/>
                </div>

                <div className="section gray">
                    <Grid container>
                        <Grid item xs={12} sm={6} style={{ margin: "auto", padding: "20px", textAlign: "left"}}>
                            Calcul est un programme qui fait pratiquer les tables d'opérations mathématiques d'une façon intuitive et facile. Avec son interface simplifiée, il convient aux jeunes comme aux grands. 
                            <br/><br/><br/>
                            Plusieurs indicateurs au bas de la fenêtre vous disent:
                            Les tables de mathématiques que vous avez sélectionnées;
                            Les opérateurs de calcul que vous voulez pratiquer;
                            Si vous autorisez ou refusez les réponses négatives.
                        </Grid>
                        <Grid item xs={12} sm={6} style={{ margin: "auto", padding: "20px", textAlign: "left"}}>
                            <img src={ImageExemple} className="skeleton" alt=""/>
                        </Grid>
                    </Grid>
                </div>

                <div className="section">
                    <Grid container>
                        <Grid item xs={12} sm={6} style={{ margin: "auto", padding: "20px", textAlign: "left"}}>
                            <img src={ImageParametres} className="skeleton" alt=""/>
                        </Grid>
                        <Grid item xs={12} sm={6} style={{ margin: "auto", padding: "20px", textAlign: "left"}}>
                            <div className="purple-border">
                                Grâce à la page "paramètres", vous pouvez aisément changer les opérateurs de calcul choisis, le nombre de questions et tous les autres paramètres.
                                <br/><br/>
                                De plus, pour vous éviter de devoir choisir vos paramètres à chaque fois que vous voulez pratiquer vos tables, Calcul peut sauvegarder vos préférences pour la prochaine fois !!!
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className="section">
                    <Button color="primary" variant="contained" onClick={() => this.handleDownload()} style={{margin: "10px"}}>Télécharger Calcul</Button>
                </div>
            </div>
        )
    }
}


export default Calcul