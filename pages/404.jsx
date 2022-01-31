import Header from "@components/Header"
import Router from "next/router"


export default function Accueil()
{
    return (
        <div className="page">
            <Header title="Erreur 404" caption="204 de trop..."/>

            <div className="section">
                <p>L'adresse auquelle vous essayez d'accéder n'existe pas.</p>

                <button type="button" onClick={() => Router.push("/")}>Retourner à l'accueil</button>
            </div>
        </div>
    )
}
