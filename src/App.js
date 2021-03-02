import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import Box from '@material-ui/core/Box'
import CircularProgress from "@material-ui/core/CircularProgress"
import loadable from '@loadable/component'

import Header from "./components/Header"

const Accueil = loadable(() => import("./components/Accueil"))
const StonksTicker = loadable(() => import("./components/Jeux/StonksTicker"))
const ServeurForge = loadable(() => import("./components/Minecraft/ServeurForge"))
const TicTacToe = loadable(() => import("./components/Jeux/TicTacToe"))
const Consequences = loadable(() => import("./components/Jeux/Consequences/Consequence"))


export default class App extends Component
{
    render()
    {
        return (
            <React.Fragment>
                <Header/>
                <Box style={{margin: "15px", marginTop: "79px"}}>
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

                        <Route>
                            <Redirect to="/accueil"/>
                        </Route>
                    </Switch>
                </Box>
            </React.Fragment>
        )
    }
}