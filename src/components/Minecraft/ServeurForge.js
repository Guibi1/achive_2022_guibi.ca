import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { saveAs } from 'file-saver'
import YouTube from 'react-youtube'
import SwipeableViews from 'react-swipeable-views'
import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import ArrowList from '@material-ui/icons/SubdirectoryArrowRightTwoTone'


class Minecraft extends Component
{
    constructor()
    {
        super()
        this.state = {tabValue: 0, copyDone: false}
    }

    handleChange = (event, newValue) =>
    {
        this.setState({tabValue: newValue})
    }

    handleCopy = (adresse) =>
    {
        const el = document.createElement('textarea')
        el.value = adresse
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)

        this.setState({copyDone: true})
    }

    handleClose = (event, reason) =>
    {
        if (reason === 'clickaway')
            return
        
        this.setState({copyDone: false});
    }
    
    handleDownload = () =>
    {
        saveAs("/files/modsServeurForge.zip", "mods.zip")
    }
    
    render()
    {
        return (
            <div class="page">
                <Helmet><title>Serveur Minecraft Forge - Guibi.ca</title></Helmet>
                <h1>Serveur Minecraft Forge</h1>
                <h2>Une aventure sans fin</h2>
                <p>Mes amis et moi jouons sur un monde Survie Minecraft depuis le 11 mars 2020. Voici une cinématique de ce que nous avons bâti jusqu'à présent :</p>
                
                <YouTube videoId="TPkIAVGCtXI" opts={{ playerVars: {autoplay: 1} }} className="youtubePlayer"/>
                <p>Vous pouvez vous connecter et visiter notre monde en mode spectateur !</p>

                <Paper style={{maxWidth: "800px", margin: "10px auto"}}>
                    <Box border={2} borderColor="secondary.main" borderRadius="borderRadius">
                        <Tabs value={this.state.tabValue} onChange={this.handleChange} variant="fullWidth">
                            <Tab label="Avec GD Launcher"/>
                            <Tab label="Avec un autre launcher"/>
                        </Tabs>

                        <SwipeableViews axis={'x'} index={this.state.tabValue}>
                            <div role="tabpanel" dir={'x'} style={{margin: "15px", minHeight: "220px"}}>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Installez GD Launcher depuis <a href="https://gdevs.io/" rel="noreferrer" target="_blank"> gdevs.io</a>;</span>
                               </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Ajoutez une instance en cliquant sur le plus en bas à gauche de la fenêtre;</span>
                               </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Naviguez jusqu'à l'onget d'ajout à partir d'un fichier .zip;</span>
                               </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Entrez l'adresse située ci-dessous;</span>
                               </span>
                                <Button color="secondary" variant="outlined" onClick={() => this.handleCopy("https://guibi.ca/files/configServeurForge.zip")} style={{margin: "10px"}}>Copier l'adresse</Button>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Appuyez sur la flèche en bas à droite jusqu'à ce que les téléchargements débutent;</span>
                               </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Ouvrez Minecraft en cliquant sur l'instance une fois qu'elle est prête;</span>
                               </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Allez dans l'onglet Multijoueur et rejoignez notre serveur!</span>
                               </span>
                            </div>
                            <div role="tabpanel" dir={'x'} style={{margin: "15px", minHeight: "220px"}}>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Installez Forge depuis <a href="http://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.16.5.html" rel="noreferrer" target="_blank"> files.minecraftforge.net</a>;</span>
                               </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Téléchargez les mods requis ci-dessous;</span>
                               </span>
                                <Button color="secondary" variant="outlined" onClick={this.handleDownload} style={{margin: "10px"}}>Télécharger les mods</Button>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Extractez les mods du fichier .zip dans le dossier "%appdata%/.minecraft/mods";</span>
                               </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Ouvrez Minecraft Forge 1.16.5 via votre launcher;</span>
                               </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Allez dans l'onglet Multijoueur et ajoutez notre serveur avec l'adresse ci-dessous !</span>
                               </span>
                                <Button color="secondary" variant="outlined" onClick={() => this.handleCopy("forge.minecraft.guibi.ca")} style={{margin: "10px"}}>Copier l'adresse</Button>
                            </div>
                        </SwipeableViews>
                    </Box>
                </Paper>
                
                <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={this.state.copyDone} autoHideDuration={4000} onClose={this.handleClose} message="Adresse copiée avec brio !"
                    action={<IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>}>
                </Snackbar>
            </div>
        )
    }
}

export default Minecraft