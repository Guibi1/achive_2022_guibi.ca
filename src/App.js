import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import CircularProgress from "@material-ui/core/CircularProgress"
import loadable from '@loadable/component'

import Header from "./components/Header"

const Accueil = loadable(() => import("./components/Accueil"))
const StonksTicker = loadable(() => import("./components/StonksTicker/StonksTicker"))
const ServeurFabric = loadable(() => import("./components/Minecraft/ServeurFabric"))
const ServeurForge = loadable(() => import("./components/Minecraft/ServeurForge"))
const Calcul = loadable(() => import("./components/Calcul/Calcul"))
const TicTacToe = loadable(() => import("./components/TicTacToe/TicTacToe"))
const Consequences = loadable(() => import("./components/Consequences/Consequences"))


export default class App extends Component
{
    render()
    {
        return (
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route exact path="/accueil">
                        <Accueil fallback={<CircularProgress color="secondary"/>}/>
                    </Route>

                    <Route path="/minecraft/serveur-fabric">
                        <ServeurFabric fallback={<CircularProgress color="secondary"/>}/>
                    </Route>

                    <Route path="/minecraft/serveur-forge">
                        <ServeurForge fallback={<CircularProgress color="secondary"/>}/>
                    </Route>
                    
                    <Route exact path="/stonk-sticker">
                        <StonksTicker fallback={<CircularProgress color="secondary"/>}/>
                    </Route>

                    <Route path="/calcul">
                        <Calcul fallback={<CircularProgress color="secondary"/>}/>
                    </Route>

                    <Route path="/tic-tac-toe">
                        <TicTacToe fallback={<CircularProgress color="secondary"/>}/>
                    </Route>

                    <Route path="/consequences">
                        <Consequences fallback={<CircularProgress color="secondary"/>}/>
                    </Route>

                    <Redirect from="/" to="/accueil"/>
                </Switch>
            </React.Fragment>
        )
    }
}