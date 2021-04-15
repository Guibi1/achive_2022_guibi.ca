import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import Box from '@material-ui/core/Box'
import CircularProgress from "@material-ui/core/CircularProgress"
import loadable from '@loadable/component'

import Header from "./components/Header"
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'

const Accueil = loadable(() => import("./components/Accueil"))
const StonksTicker = loadable(() => import("./components/Jeux/StonksTicker"))
const ServeurForge = loadable(() => import("./components/Minecraft/ServeurForge"))
const TicTacToe = loadable(() => import("./components/Jeux/TicTacToe"))
const Consequences = loadable(() => import("./components/Jeux/Consequences"))


const Theme = createMuiTheme({ palette: { primary: { main: "#5899e2" }, secondary: { main: "#e36397" } } })


export default class App extends Component
{
    render()
    {
        return (
            <ThemeProvider theme={Theme}>
                <Header/>
                <Box style={{margin: "15px", marginTop: "79px", display: "block", justifyContent: "center", textAlign: "center"}}>
                    <Switch>
                        <Route exact path="/accueil">
                            <Accueil fallback={<CircularProgress/>}/>
                        </Route>

                        <Route path="/minecraft/serveurforge">
                            <ServeurForge fallback={<CircularProgress/>}/>
                        </Route>
                        
                        <Route exact path="/stonksticker">
                            <StonksTicker fallback={<CircularProgress/>}/>
                        </Route>

                        <Route path="/tictactoe">
                            <TicTacToe fallback={<CircularProgress/>}/>
                        </Route>

                        <Route path="/consequences">
                            <Consequences fallback={<CircularProgress/>}/>
                        </Route>

                        <Redirect from="/" to="/accueil"/>
                    </Switch>
                </Box>
            </ThemeProvider>
        )
    }
}