import { Helmet } from "react-helmet";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import loadable from "@loadable/component";

import { CircularProgress } from "@material-ui/core";

const TicTacToe = loadable(() => import("./TicTacToe"))
const Cercle = loadable(() => import("./Cercle"))


export default function MiniJeux()
{
    const location = useLocation();

    return (
        <div className="page">
            <Helmet><title>Mini Jeux - Guibi.ca</title></Helmet>
            <div className="title">
                <h1>Mini Jeux</h1>
                <h2>pro gamer</h2>
            </div>
            <div className="nav">
                <Link to="cercle" className={location.pathname.endsWith("cercle") ? "current" : ""}>Cercle</Link>
                <Link to="tictactoe" className={location.pathname.endsWith("tictactoe") ? "current" : ""}>Tic Tac Toe</Link>
            </div>

            <Routes>
                <Route path="tictactoe" element={
                    <TicTacToe fallback={<CircularProgress color="secondary"/>}/>
                }/>

                <Route path="cercle" element={
                    <Cercle fallback={<CircularProgress color="secondary"/>}/>
                }/>

                <Route path="/" element={
                    <Navigate to="cercle"/>
                }/>
            </Routes>
        </div>
    )
}
