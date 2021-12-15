import React, { useState } from "react"
import { useLocation } from "react-router"
import { Link } from "react-router-dom";


export default function Header()
{
    const [noHover, setNoHover] = useState(false);
    const location = useLocation();

    window.addEventListener('touchstart', () => { setNoHover(true); });
    document.addEventListener("click", (e) => {
        const nav = document.getElementsByTagName("nav")[0];
        let targetElement = e.target;
    
        do {
            if (targetElement === nav)
                return;
            targetElement = targetElement.parentNode;
        } while (targetElement);

        var element = document.getElementsByTagName("nav")[0];
        element.className = "";
        element.scrollTo(0, 0);
    });

    return (
        <nav onMouseEnter={() => HandleOpen(noHover)} onMouseLeave={() => HandleClose(noHover)}>
            <ul>
                <li>
                    <a onClick={HandleLogoClick} href="/accueil" className={location.pathname === "/accueil" ? "logo current" : "logo"}>
                        <span>Guibi.ca</span>
                        <svg onClick={HandleToggle} aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-angle-double-right fa-w-14 fa-2x"><g className="fa-group"><path fill="currentColor" d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z" className="fa-dark"></path><path fill="currentColor" d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z" className="fa-light"></path></g></svg>
                    </a>
                </li>
                <Item url="/minecraft" title="Serveurs Minecraft">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="cubes" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-cubes fa-w-16 fa-2x"><g className="fa-group"><path fill="currentColor" d="M488.6 250.2L392 214V105.52a36 36 0 0 0-23.4-33.7l-100-37.5a35.68 35.68 0 0 0-25.3 0l-100 37.5a36 36 0 0 0-23.4 33.7V214l-96.6 36.2A36 36 0 0 0 0 283.9V394a36 36 0 0 0 19.9 32.2l100 50a35.86 35.86 0 0 0 32.2 0l103.9-52 103.9 52a35.86 35.86 0 0 0 32.2 0l100-50A36 36 0 0 0 512 394V283.9a36 36 0 0 0-23.4-33.7zM238 395.18l-85 42.5v-79.09l85-38.8zm0-112l-102 41.41L34 283.2v-.6l102-38.2 102 38.2zm-84-178.46v-.6l102-38.2 102 38.2v.6l-102 41.39zm119 73.79l85-37v73.29l-85 31.9zm205 216.67l-85 42.5v-79.09l85-38.8zm0-112l-102 41.41-102-41.39v-.6l102-38.2 102 38.2z" className="fa-dark"></path><path fill="currentColor" d="M153 437.68l85-42.5v-75.39l-85 38.8zm240-79.09v79.09l85-42.5v-75.39zM273 246.7l85-31.9v-73.29l-85 37z" className="fa-light"></path></g></svg>
                </Item>
                <Item url="/calcul" title="Calcul">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="abacus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-abacus fa-w-18 fa-2x"><g className="fa-group"><path fill="currentColor" d="M192 440h-32v-48h32zM160 72v48h32V72zm96 160v48h32v-48zm-96 0v48h32v-48zm96 208h160v-48H256zm96-160h128v-48H352zM544 0a32 32 0 0 0-32 32v464a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V32a32 32 0 0 0-32-32zM416 72H256v48h160zM32 0A32 32 0 0 0 0 32v464a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V32A32 32 0 0 0 32 0z" className="fa-dark"></path><path fill="currentColor" d="M144 32h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm96 0h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm-96 160h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zm192 0h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zm-96 0h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zM464 32h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM144 352h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zm96 0h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zm224 0h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16z" className="fa-light"></path></g></svg>
                </Item>
                <Item url="/stonk-sticker" title="Stonks Ticker">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="dice" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg-inline--fa fa-dice fa-w-20 fa-2x"><g className="fa-group"><path fill="currentColor" d="M433.63 189.3L258.7 14.37a49.07 49.07 0 0 0-69.39 0L14.37 189.3a49.07 49.07 0 0 0 0 69.39L189.3 433.63a49.07 49.07 0 0 0 69.39 0L433.63 258.7a49.08 49.08 0 0 0 0-69.4zM96 248a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm128 128a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-128a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-128a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm128 128a24 24 0 1 1 24-24 24 24 0 0 1-24 24z" className="fa-dark"></path><path fill="currentColor" d="M592 192H473.26a81.07 81.07 0 0 1-17 89.32L320 417.58V464a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48V240a48 48 0 0 0-48-48zM480 376a24 24 0 1 1 24-24 24 24 0 0 1-24 24zM96 200a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm256 48a24 24 0 1 0-24-24 24 24 0 0 0 24 24zm-128 80a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm0-256a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm0 128a24 24 0 1 0 24 24 24 24 0 0 0-24-24z" className="fa-light"></path></g></svg>
                </Item>
                <Item url="/tic-tac-toe" title="Tic Tac Toe">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="game-board" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-game-board fa-w-16 fa-2x"><g className="fa-group"><path fill="currentColor" d="M480 0H32A32 32 0 0 0 0 32v448a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zm-31.8 448H64v-96h.2v-96H64v-96h.2V64h384z" className="fa-dark"></path><path fill="currentColor" d="M256 256v-96h-95.9V64.1h-96v96H160V256H64.2v96h96v-96zm0 96h-95.8v96h96v-96H352v-96h-96zm96.1 96.1h96v-96h-96zm.1-288.1v96h96v-96zm-96-96v96h96V64z" className="fa-light"></path></g></svg>
                </Item>
                <Item url="/consequences" title="Conséquences">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="hand-point-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-hand-point-right fa-w-16 fa-2x"><g className="fa-group"><path fill="currentColor" d="M512 199.65c0 23.63-20.65 43.83-44.8 43.83h-99.85c16.34 17 18.34 49.76-6.3 70.94 14.29 22.83 2.15 53-16.45 62.32 9 49.14-22 71.26-72.6 71.26-2.75 0-13.28-.2-16-.19-62 .16-76.89-31.07-123.73-38.32a24 24 0 0 1-20.27-23.7V214.26a48 48 0 0 1 28.47-43.84c28.88-13 95.41-49 107.53-77.33C255.8 74.9 269.38 64 288 64c34.22 0 57.75 35.1 44.12 66.91A135.83 135.83 0 0 1 318 155.83h149.2c23.45 0 44.8 20.54 44.8 43.82z" className="fa-dark"></path><path fill="currentColor" d="M72 176H24a24 24 0 0 0-24 24v192a24 24 0 0 0 24 24h48a24 24 0 0 0 24-24V200a24 24 0 0 0-24-24zM48 388a20 20 0 1 1 20-20 20 20 0 0 1-20 20z" className="fa-light"></path></g></svg>
                </Item>

                <li>
                    <div>
                        <a href="https://github.com/Guibi1">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg-inline--fa fa-github fa-w-16 fa-7x"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" className="fa-dark"></path></svg>
                        </a>
                        <a href="https://gitlab.com/Guibi">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="gitlab" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-gitlab fa-w-16 fa-7x"><path fill="currentColor" d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z" className="fa-dark"></path></svg>
                        </a>
                        <a href="https://www.instagram.com/laurent.stephenne/">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-instagram fa-w-14 fa-7x"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" className="fa-dark"></path></svg>
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

function Item(props)
{
    const location = useLocation();

    return (
        <li>
            <Link to={props.url} className={location.pathname.startsWith(props.url) ? "current" : ""}>
                {props.children}
                <span>{props.title}</span>
            </Link>
        </li>
    )
}
function HandleOpen(noHover)
{
    if (!noHover)
        document.getElementsByTagName("nav")[0].className = "open";
}

function HandleClose(noHover)
{
    if (!noHover)
    {
        var nav = document.getElementsByTagName("nav")[0];
        nav.className = "";
        nav.scrollTo(0, 0);
    }
}

function HandleToggle(e)
{
    e.preventDefault();
    e.stopPropagation();
    
    var nav = document.getElementsByTagName("nav")[0];
    if (nav.className === "")
        nav.className = "open";
    
    else if (nav.className === "open")
    {
        nav.scrollTo(0, 0);
        nav.className = "";
    }
}
    
function HandleLogoClick(e)
{
    var nav = document.getElementsByTagName("nav")[0];
    if (nav.className === "")
    {
        nav.className = "open";
        e.preventDefault();
    }
}