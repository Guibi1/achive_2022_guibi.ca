import { Navigate, Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";
import Header, { HeaderLink } from 'components/Header';

import { CircularProgress } from "@material-ui/core";

const TicTacToe = loadable(() => import("./TicTacToe"))
const Cercle = loadable(() => import("./Cercle"))


export default function MiniJeux()
{
    return (
        <div className="page">
            <Header title="Mini Jeux" caption="Shesh">
                <HeaderLink title="Cerlce" url="cercle"/>
                <HeaderLink title="Tic Tac Toe" url="tictactoe"/>
            </Header>

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
