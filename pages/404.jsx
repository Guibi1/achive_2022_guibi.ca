import Header from "@components/Header"
import Router from "next/router"


export default function PageNotFound()
{
    return (
        <div className="page">
            <Header title="Erreur 404" caption="204 de trop..."/>

            <div className="section">
                <p>L&apos;adresse auquelle vous essayez d&apos;accéder n&apos;existe pas.</p>

                <button type="button" onClick={() => Router.push("/")}>Retourner à l&apos;accueil</button>
            </div>
        </div>
    )
}
