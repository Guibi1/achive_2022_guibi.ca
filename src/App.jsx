import React, { Component } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import CircularProgress from "@material-ui/core/CircularProgress"
import loadable from '@loadable/component'

import Header from "./components/Header"

const Accueil = loadable(() => import("./components/Accueil"))
const PageNotFound = loadable(() => import("./components/PageNotFound"))
const StonksTicker = loadable(() => import("./components/StonksTicker/StonksTicker"))
const ServeursMinecraft = loadable(() => import("./components/Minecraft/ServeursMinecraft"))
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
                <Routes>
                    <Route exact path="accueil" element={
                        <Accueil fallback={<CircularProgress color="secondary"/>}/>
                    }/>

                    <Route path="minecraft" element={
                        <ServeursMinecraft fallback={<CircularProgress color="secondary"/>}/>
                    }/>
                    
                    <Route exact path="stonk-sticker" element={
                        <StonksTicker fallback={<CircularProgress color="secondary"/>}/>
                    }/>

                    <Route path="calcul" element={
                        <Calcul fallback={<CircularProgress color="secondary"/>}/>
                    }/>

                    <Route path="tic-tac-toe" element={
                        <TicTacToe fallback={<CircularProgress color="secondary"/>}/>
                    }/>

                    <Route path="consequences" element={
                        <Consequences fallback={<CircularProgress color="secondary"/>}/>
                    }/>

                    <Route path="/" element={
                        <Navigate to="/accueil"/>
                    }/>

                    <Route path="/*" element={
                        <PageNotFound fallback={<CircularProgress color="secondary"/>}/>
                    }/>
                </Routes>
            </React.Fragment>
        )
    }
}