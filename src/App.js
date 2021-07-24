import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import Box from '@material-ui/core/Box'
import CircularProgress from "@material-ui/core/CircularProgress"
import loadable from '@loadable/component'

import Header from "./components/Header"

const Accueil = loadable(() => import("./components/Accueil"))
const StonksTicker = loadable(() => import("./components/Jeux/StonksTicker"))
const ServeurFabric = loadable(() => import("./components/Minecraft/ServeurFabric"))
const ServeurForge = loadable(() => import("./components/Minecraft/ServeurForge"))
const Calcul = loadable(() => import("./components/Jeux/Calcul/Calcul"))
const TicTacToe = loadable(() => import("./components/Jeux/TicTacToe"))
const Consequences = loadable(() => import("./components/Jeux/Consequences"))


export default class App extends Component
{
    render()
    {
        return (
            <React.Fragment>
                <Header/>
                <Box>
                    <Switch>
                        <Route exact path="/accueil">
                            <Accueil fallback={<CircularProgress color="secondary"/>}/>
                        </Route>

                        <Route path="/minecraft/serveurfabric">
                            <ServeurFabric fallback={<CircularProgress color="secondary"/>}/>
                        </Route>

                        <Route path="/minecraft/serveurforge">
                            <ServeurForge fallback={<CircularProgress color="secondary"/>}/>
                        </Route>
                        
                        <Route exact path="/stonksticker">
                            <StonksTicker fallback={<CircularProgress color="secondary"/>}/>
                        </Route>

                        <Route path="/calcul">
                            <Calcul fallback={<CircularProgress color="secondary"/>}/>
                        </Route>

                        <Route path="/tictactoe">
                            <TicTacToe fallback={<CircularProgress color="secondary"/>}/>
                        </Route>

                        <Route path="/consequences">
                            <Consequences fallback={<CircularProgress color="secondary"/>}/>
                        </Route>

                        <Redirect from="/" to="/accueil"/>
                    </Switch>
                </Box>
            </React.Fragment>
        )
    }
}