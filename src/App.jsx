import React, { Component } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Loader from "react-loader-spinner"
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
                        <Accueil fallback={<Loader type="Rings"/>}/>
                    }/>

                    <Route path="minecraft" element={
                        <ServeursMinecraft fallback={<Loader type="Rings"/>}/>
                    }/>
                    
                    <Route exact path="stonk-sticker" element={
                        <StonksTicker fallback={<Loader type="Rings"/>}/>
                    }/>

                    <Route path="calcul" element={
                        <Calcul fallback={<Loader type="Rings"/>}/>
                    }/>

                    <Route path="minijeux/*" element={
                        <MiniJeux fallback={<Loader type="Rings"/>}/>
                    }/>

                    <Route path="consequences" element={
                        <Consequences fallback={<Loader type="Rings"/>}/>
                    }/>

                    <Route path="/" element={
                        <Navigate to="/accueil"/>
                    }/>

                    <Route path="/*" element={
                        <PageNotFound fallback={<Loader type="Rings"/>}/>
                    }/>
                </Routes>
            </React.Fragment>
        )
    }
}
