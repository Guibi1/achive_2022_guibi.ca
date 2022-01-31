import Image from 'next/image'
import { saveAs } from 'file-saver'
import Header from '@components/Header'

import ImageNormal from '@public/Calcul/Normal.webp'
import ImageExemple from '@public/Calcul/Exemple.webp'
import ImageParametres from '@public/Calcul/Parametres.webp'


export default function Calcul()
{
    return (
        <div className="page">
            <Header title="Calcul" caption="Une nouvelle façon de pratiquer ses tables"/>

            <div className="section">
                <Image src={ImageNormal} alt="L'interface de Calcul" placeholder="blur"/>
            </div>

            <div className="section gray">
                <div className="grid">
                    <div className="text">
                        <h2>Fonctionnalités</h2>
                        <p>Calcul est un programme qui fait pratiquer les tables d&apos;opérations mathématiques d&apos;une façon intuitive et facile. Avec son interface simplifiée, il convient aux jeunes comme aux grands.</p>
                        <p>Plusieurs indicateurs au bas de la fenêtre vous disent:</p>
                        <ul>
                            <li>Les tables de mathématiques que vous avez sélectionnées</li>
                            <li>Les opérateurs de calcul que vous voulez pratiquer</li>
                            <li>Si vous autorisez ou refusez les réponses négatives.</li>
                        </ul>
                    </div>
                    <div style={{ margin: "auto", padding: "20px", textAlign: "left"}}>
                        <Image src={ImageExemple} alt="Un exemple de partie" placeholder="blur"/>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="grid">
                    <div style={{ margin: "auto", padding: "20px", textAlign: "left"}}>
                        <Image src={ImageParametres} alt="L'interface des paramètres de Calcul" placeholder="blur"/>
                    </div>
                    <div className="purple-border text">
                        <h2>Paramètres</h2>
                        <p>Grâce à la page des paramètres, vous pouvez aisément changer les opérateurs de calcul choisis, le nombre de questions et tous les autres paramètres.</p>
                        <p>De plus, pour vous éviter de devoir choisir vos paramètres à chaque fois que vous voulez pratiquer vos tables, Calcul peut sauvegarder vos préférences pour la prochaine fois !!!</p>
                    </div>
                </div>
            </div>

            <div className="section">
                <button type="button" onClick={handleDownload} className="big">Télécharger Calcul</button>
            </div>
        </div>
    )
}

function handleDownload()
{
    saveAs("/files/setupCalcul.exe", "setupCalcul.exe")
}
