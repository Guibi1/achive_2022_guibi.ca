import React, { useState } from "react"
import { useLocation } from "react-router"
import './Header.css'


export default function Header()
{
    const [noHover, setNoHover] = useState(false);
    const location = useLocation();

    window.addEventListener('touchstart', () => { setNoHover(true); });
    document.addEventListener("click", (e) => {
        const navBar = document.getElementById("navBar");
        let targetElement = e.target;
    
        do {
            if (targetElement === navBar)
                return;
            targetElement = targetElement.parentNode;
        } while (targetElement);

        var element = document.getElementById("navBar");
        element.className = "";
        element.scrollTo(0, 0);
    });

    return (
        <nav id="navBar" onMouseEnter={() => HandleOpen(noHover)} onMouseLeave={() => HandleClose(noHover)}>
            <ul>
                <li className="navBar-item">
                    <a onClick={HandleLogoClick} href="/accueil" className={location.pathname === "/accueil" ? "navBar-link navBar-link-current logo" : "navBar-link logo"}>
                        <span className="navBar-text logo">Guibi.ca</span>
                        <svg onClick={HandleToggle} style={{height: "2.5rem", width: "2.5rem"}} aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-angle-double-right fa-w-14 fa-2x"><g className="fa-group"><path fill="currentColor" d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z" className="fa-secondary"></path><path fill="currentColor" d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z" className="fa-primary"></path></g></svg>
                    </a>
                </li>
                <Item url="/minecraft/serveurfabric" title="Serveur Fabric 1.17">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="dice-d6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-dice-d6 fa-w-14 fa-2x"><g className="fa-group"><path fill="currentColor" d="M25.87 124.42a8.54 8.54 0 0 1-.06-14.42l166-100.88a61.72 61.72 0 0 1 64.43 0L422.19 110a8.54 8.54 0 0 1-.05 14.47L224 242.55z" className="fa-secondary"></path><path fill="currentColor" d="M0 161.83v197.7c0 23.77 12.11 45.74 31.79 57.7L184 509.71c10.67 6.48 24.05-1.54 24.05-14.44V271.46L12 154.58c-5.36-3.17-12 .85-12 7.25zm436-7.25L240 271.46v223.82c0 12.89 13.39 20.92 24.05 14.43l152.16-92.48c19.68-12 31.79-33.94 31.79-57.7v-197.7c0-6.41-6.64-10.42-12-7.25z" className="fa-primary"></path></g></svg>
                </Item>
                <Item url="/minecraft/serveurforge" title="Serveur Forge 1.16.5">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="cubes" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-cubes fa-w-16 fa-2x"><g className="fa-group"><path fill="currentColor" d="M488.6 250.2L392 214V105.52a36 36 0 0 0-23.4-33.7l-100-37.5a35.68 35.68 0 0 0-25.3 0l-100 37.5a36 36 0 0 0-23.4 33.7V214l-96.6 36.2A36 36 0 0 0 0 283.9V394a36 36 0 0 0 19.9 32.2l100 50a35.86 35.86 0 0 0 32.2 0l103.9-52 103.9 52a35.86 35.86 0 0 0 32.2 0l100-50A36 36 0 0 0 512 394V283.9a36 36 0 0 0-23.4-33.7zM238 395.18l-85 42.5v-79.09l85-38.8zm0-112l-102 41.41L34 283.2v-.6l102-38.2 102 38.2zm-84-178.46v-.6l102-38.2 102 38.2v.6l-102 41.39zm119 73.79l85-37v73.29l-85 31.9zm205 216.67l-85 42.5v-79.09l85-38.8zm0-112l-102 41.41-102-41.39v-.6l102-38.2 102 38.2z" className="fa-secondary"></path><path fill="currentColor" d="M153 437.68l85-42.5v-75.39l-85 38.8zm240-79.09v79.09l85-42.5v-75.39zM273 246.7l85-31.9v-73.29l-85 37z" className="fa-primary"></path></g></svg>
                </Item>
                <Item url="/calcul" title="Calcul">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="abacus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-abacus fa-w-18 fa-2x"><g className="fa-group"><path fill="currentColor" d="M192 440h-32v-48h32zM160 72v48h32V72zm96 160v48h32v-48zm-96 0v48h32v-48zm96 208h160v-48H256zm96-160h128v-48H352zM544 0a32 32 0 0 0-32 32v464a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V32a32 32 0 0 0-32-32zM416 72H256v48h160zM32 0A32 32 0 0 0 0 32v464a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V32A32 32 0 0 0 32 0z" className="fa-secondary"></path><path fill="currentColor" d="M144 32h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm96 0h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm-96 160h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zm192 0h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zm-96 0h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zM464 32h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM144 352h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zm96 0h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zm224 0h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16z" className="fa-primary"></path></g></svg>
                </Item>
                <Item url="/stonksticker" title="Stonks Ticker">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="dice" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg-inline--fa fa-dice fa-w-20 fa-2x"><g className="fa-group"><path fill="currentColor" d="M433.63 189.3L258.7 14.37a49.07 49.07 0 0 0-69.39 0L14.37 189.3a49.07 49.07 0 0 0 0 69.39L189.3 433.63a49.07 49.07 0 0 0 69.39 0L433.63 258.7a49.08 49.08 0 0 0 0-69.4zM96 248a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm128 128a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-128a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-128a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm128 128a24 24 0 1 1 24-24 24 24 0 0 1-24 24z" className="fa-secondary"></path><path fill="currentColor" d="M592 192H473.26a81.07 81.07 0 0 1-17 89.32L320 417.58V464a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48V240a48 48 0 0 0-48-48zM480 376a24 24 0 1 1 24-24 24 24 0 0 1-24 24zM96 200a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm256 48a24 24 0 1 0-24-24 24 24 0 0 0 24 24zm-128 80a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm0-256a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm0 128a24 24 0 1 0 24 24 24 24 0 0 0-24-24z" className="fa-primary"></path></g></svg>
                </Item>
                <Item url="/tictactoe" title="Tic Tac Toe">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="gamepad" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg-inline--fa fa-gamepad fa-w-20 fa-2x"><g className="fa-group"><path fill="currentColor" d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z" className="fa-secondary"></path><path fill="currentColor" d="M248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12z" className="fa-primary"></path></g></svg>
                </Item>
                <Item url="/consequences" title="Conséquences">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="game-board" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-game-board fa-w-16 fa-2x"><g className="fa-group"><path fill="currentColor" d="M480 0H32A32 32 0 0 0 0 32v448a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zm-31.8 448H64v-96h.2v-96H64v-96h.2V64h384z" className="fa-secondary"></path><path fill="currentColor" d="M256 256v-96h-95.9V64.1h-96v96H160V256H64.2v96h96v-96zm0 96h-95.8v96h96v-96H352v-96h-96zm96.1 96.1h96v-96h-96zm.1-288.1v96h96v-96zm-96-96v96h96V64z" className="fa-primary"></path></g></svg>
                </Item>
            </ul>
        </nav>
    )
}

function Item(props)
{
    const location = useLocation();

    return (
        <li className="navBar-item">
                <a href={props.url} className={location.pathname === props.url ? "navBar-link navBar-link-current" : "navBar-link"}>
                    {props.children}
                    <span className="navBar-text">{props.title}</span>
                </a>
        </li>
    )
}
function HandleOpen(noHover)
{
    if (!noHover)
        document.getElementById("navBar").className = "open";
}

function HandleClose(noHover)
{
    if (!noHover)
    {
        var element = document.getElementById("navBar");
        element.className = "";
        element.scrollTo(0, 0);
    }
}

function HandleToggle(e)
{
    e.preventDefault();
    e.stopPropagation();
    
    var element = document.getElementById("navBar");
    if (element.className === "")
        element.className = "open";
    
    else if (element.className === "open")
    {
        element.scrollTo(0, 0);
        element.className = "";
    }
}
    
function HandleLogoClick(e)
{
    var element = document.getElementById("navBar");
    if (element.className === "")
    {
        element.className = "open";
        e.preventDefault();
    }
}