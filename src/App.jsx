import React, { Component } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import CircularProgress from "@material-ui/core/CircularProgress"
import loadable from '@loadable/component'

import Navigation from "./components/Navigation"

const Accueil = loadable(() => import("./components/Accueil"))
const PageNotFound = loadable(() => import("./components/PageNotFound"))
const StonksTicker = loadable(() => import("./components/StonksTicker/StonksTicker"))
const ServeursMinecraft = loadable(() => import("./components/Minecraft/ServeursMinecraft"))
const Calcul = loadable(() => import("./components/Calcul/Calcul"))
const MiniJeux = loadable(() => import("./components/MiniJeux/MiniJeux"))
const Consequences = loadable(() => import("./components/Consequences/Consequences"))


export default class App extends Component
{
    render()
    {
        return (
            <React.Fragment>
                <Navigation/>
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

                    <Route path="minijeux/*" element={
                        <MiniJeux fallback={<CircularProgress color="secondary"/>}/>
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
