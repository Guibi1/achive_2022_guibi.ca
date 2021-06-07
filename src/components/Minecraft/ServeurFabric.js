import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import YouTube from 'react-youtube'
import { saveAs } from 'file-saver'
import Container from '@material-ui/core/Container'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import SwipeableViews from 'react-swipeable-views'
import ArrowList from '@material-ui/icons/SubdirectoryArrowRightTwoTone'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


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
        saveAs("https://guibi.ca/files/modsServeurFabric.zip", "mods.zip")
    }
    
    render()
    {
        return (
            <Container>
                <Helmet><title>Serveur Minecraft Fabric - Guibi.ca</title></Helmet>
                <Typography variant="h3">Serveur Minecraft Fabric</Typography>
                <Typography variant="h5" style={{marginBottom: "10px"}}>Une exploration sans limite</Typography>
                <Typography varient="body1">Mes amis et moi avons commencé un nouveaux monde Survie Minecraft le 12 juin 2021.</Typography>
            
                <Typography varient="body1">Vous pouvez vous connecter et visiter notre monde en mode spectateur !</Typography>

                <Paper style={{maxWidth: "800px", margin: "10px auto"}}>
                    <Box border={1.5} borderColor="primary.main" borderRadius="borderRadius">
                        <Tabs value={this.state.tabValue} onChange={this.handleChange} variant="fullWidth">
                            <Tab label="Avec GD Launcher"/>
                            <Tab label="Avec un autre launcher"/>
                        </Tabs>

                        <SwipeableViews axis={'x'} index={this.state.tabValue}>
                            <div role="tabpanel" dir={'x'} style={{margin: "15px", minHeight: "220px"}}>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Installez GD Launcher depuis <a href="https://gdevs.io/" rel="noreferrer" target="_blank"> gdevs.io</a></span>
                                </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Ajoutez une instance en cliquant sur le plus en bas à gauche de la fenêtre</span>
                                </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Naviguez jusqu'à l'onget d'ajout à partir d'un fichier .zip</span>
                                </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Entrez l'adresse située ci-dessous</span>
                                </span>
                                <Button color="secondary" variant="outlined" onClick={() => this.handleCopy("https://guibi.ca/files/configServeurFabric.zip")} style={{margin: "10px"}}>Copier l'adresse</Button>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Appuyez sur la flèche en bas à droite jusqu'à ce que les téléchargements débutent</span>
                                </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Ouvrez Minecraft en cliquant sur l'instance une fois qu'elle est prête</span>
                                </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Allez dans l'onglet Multijoueur et rejoignez notre serveur!</span>
                                </span>
                            </div>
                            <div role="tabpanel" dir={'x'} style={{margin: "15px", minHeight: "220px"}}>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Installez Fabric 1.17 depuis <a href="https://fabricmc.net/use/" rel="noreferrer" target="_blank"> fabricmc.net</a></span>
                                </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Téléchargez les mods requis ci-dessous</span>
                                </span>
                                <Button color="secondary" variant="outlined" onClick={this.handleDownload} style={{margin: "10px"}}>Télécharger les mods</Button>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Extractez les mods du fichier .zip dans le dossier ".minecraft/mods"</span>
                                </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Ouvrez Minecraft Fabric 1.17 via votre launcher</span>
                                </span>
                                <span style={{display: 'flex', justifyContent: "center"}}>
                                    <ArrowList fontSize="small"/>
                                    <span>Allez dans l'onglet Multijoueur et ajoutez notre serveur avec l'adresse ci-dessous !</span>
                                </span>
                                <Button color="secondary" variant="outlined" onClick={() => this.handleCopy("minecraft.guibi.ca")} style={{margin: "10px"}}>Copier l'adresse</Button>
                            </div>
                        </SwipeableViews>
                    </Box>
                </Paper>
                
                <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={this.state.copyDone} autoHideDuration={4000} onClose={this.handleClose} message="Adresse copiée avec brio !"
                    action={<IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>}>
                </Snackbar>
            </Container>
        )
    }
}

export default Minecraft