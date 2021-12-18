import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "react-loader-spinner";
import loadable from "@loadable/component";

import Header, { HeaderLink } from 'components/Header';

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
                    <TicTacToe fallback={<Loader type="Rings"/>}/>
                }/>

                <Route path="cercle" element={
                    <Cercle fallback={<Loader type="Rings"/>}/>
                }/>

                <Route path="/" element={
                    <Navigate to="cercle"/>
                }/>
            </Routes>
        </div>
    )
}
