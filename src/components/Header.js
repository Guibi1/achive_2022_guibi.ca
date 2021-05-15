import React, { Component } from "react"
import { Link } from "react-router-dom"

import Container from "@material-ui/core/Container"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListSubheader from "@material-ui/core/ListSubheader"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { Home, VideogameAsset, Gamepad } from "@material-ui/icons"


export default class Header extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {menuOpen: false}
    }
    
    openMenu = () =>
    {
        this.setState({menuOpen: true})
    }
    
    closeMenu = () =>
    {
        this.setState({menuOpen: false})
    }
    
    render()
    {
        return (
            <React.Fragment>
                <AppBar>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.openMenu}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h5" style={{marginLeft: "10px"}}>Guibi</Typography>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.menuOpen} onClose={this.closeMenu}>
                    <Container style={{width: 250, padding: 10}} role="presentation" onClick={this.closeMenu} onKeyDown={this.closeMenu}>
                        <List>
                            <ListButton titre="Accueil" url="/accueil" icone={<Home/>}/>
                        </List>
                        <Divider/>
                        <List component="nav" subheader={<ListSubheader style={{display: 'flex', alignItems: 'center'}}><Gamepad fontSize="small" style={{paddingRight: 8}}/>Minecraft</ListSubheader>}>
                            <ListButton titre="Serveur Forge 1.16.5" url="/minecraft/serveurforge"/>
                        </List>
                        <Divider/>
                        <List component="nav" subheader={<ListSubheader style={{display: 'flex', alignItems: 'center'}}><VideogameAsset fontSize="small" style={{paddingRight: 8}}/>Jeux</ListSubheader>}>
                            <ListButton titre="Stonks Ticker" url="/stonksticker"/>
                            <ListButton titre="Calcul" url="/calcul"/>
                            <ListButton titre="Tic Tac Toe" url="/tictactoe"/>
                            <ListButton titre="Conséquences" url="/consequences"/>
                        </List>
                    </Container>
                </Drawer>
            </React.Fragment>
        )
    }
}


function ListButton(props) {
    return (
        <ListItem button component={Link} to={props.url}>
            {props.icone != null ? <ListItemIcon>{props.icone}</ListItemIcon> : null}
            <ListItemText primary={props.titre}/>
        </ListItem>
    )
}