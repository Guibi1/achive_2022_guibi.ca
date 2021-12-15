import React, { Component } from 'react'
import { saveAs } from 'file-saver'
import YouTube from 'react-youtube'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import Header from 'components/Header'


export default class ServeursMinecraft extends Component
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
    
    handleDownload = (url) =>
    {
        saveAs(url, "mods.zip")
    }
    
    render()
    {
        return (
            <div className="page">
                <Header title="Serveurs Minecraft" caption="Une aventure sans fin"/>

                <div className="section">
                    Mes amis et moi jouons à Minecraft sur plusieurs serveurs privées.
                    Nous avons commencé un serveur survie où nous avons construit des villes médiévales le 11 mars 2020.
                    Nous avons aussi créé un monde survie pour jouer dans la nouvelle version de Minecraft le 12 juin 2021.
                    <br/>
                    Voici une cinématique de ce que nous avons bâti jusqu'à présent dans le monde médiéval :
                    <YouTube videoId="TPkIAVGCtXI" opts={{ playerVars: {autoplay: 0} }} className="youtubePlayer"/>
                    Vous pouvez vous connecter et visiter nos mondes en mode spectateur !
                </div>
                
                <div className="flex section gray">
                    <div>
                        <ul>
                            <h2>GD Launcher</h2>
                            <li>Installez GD Launcher depuis <a href="https://gdevs.io/" rel="noreferrer" target="_blank"> gdevs.io</a></li>
                            <li>Ajoutez une instance en cliquant sur le plus en bas à gauche de la fenêtre</li>
                            <li>Naviguez jusqu'à l'onget d'ajout à partir d'un fichier .zip</li>
                            <li>Entrez l'adresse située ci-dessous</li>
                            <div className="flex spaced">
                                <button type="button" onClick={() => this.handleCopy("https://guibi.ca/files/configServeurForge.zip")}>Serveur médiéval</button>
                                <button type="button" onClick={() => this.handleCopy("https://guibi.ca/files/configServeurFabric.zip")}>Serveur survie</button>
                            </div>
                            <li>Appuyez sur la flèche en bas à droite jusqu'à ce que les téléchargements débutent</li>
                            <li>Ouvrez Minecraft en cliquant sur l'instance une fois qu'elle est prête</li>
                            <li>Allez dans l'onglet Multijoueur et rejoignez notre serveur!</li>
                        </ul>
                    </div>
                        
                    <div>
                        <ul>
                            <h2>Autres Launcher</h2>
                            <li>Installez Forge depuis <a href="http://files.minecraftforge.net/net/minecraftforge/forge" rel="noreferrer" target="_blank"> files.minecraftforge.net</a></li>
                            <li>Téléchargez les mods requis ci-dessous</li>
                            <div className="flex spaced">
                                <button type="button" onClick={() => this.handleDownload("/files/modsServeurForge.zip")}>Mods médiéval 1.16.5</button>
                                <button type="button" onClick={() => this.handleDownload("/files/modsServeurFabric.zip")}>Mods survie 1.17</button>
                            </div>
                            <li>Extractez les mods du fichier .zip dans le dossier <i>.minecraft/mods/</i></li>
                            <li>Ouvrez Minecraft Forge 1.16.5 via votre launcher</li>
                            <li>Allez dans l'onglet Multijoueur et ajoutez notre serveur avec l'adresse ci-dessous !</li>
                            <div className="flex spaced">
                                <button type="button" onClick={() => this.handleCopy("forge.minecraft.guibi.ca")}>Serveur médiéval</button>
                                <button type="button" onClick={() => this.handleCopy("minecraft.guibi.ca")}>Serveur survie</button>
                            </div>
                        </ul>
                    </div>
                </div>
                
                <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={this.state.copyDone} autoHideDuration={4000} onClose={this.handleClose} message="Adresse copiée avec brio !"
                    action={<IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>}>
                </Snackbar>
            </div>
        )
    }
}
