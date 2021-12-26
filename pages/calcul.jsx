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
                <Image src={ImageNormal} alt="L'interface de calcul"/>
            </div>

            <div className="section gray">
                <div className="grid">
                    <div style={{ margin: "auto", padding: "20px", textAlign: "left"}}>
                        <h2>Fonctionnalités</h2>
                        Calcul est un programme qui fait pratiquer les tables d'opérations mathématiques d'une façon intuitive et facile. Avec son interface simplifiée, il convient aux jeunes comme aux grands. 
                        <br/><br/><br/>
                        Plusieurs indicateurs au bas de la fenêtre vous disent:
                        Les tables de mathématiques que vous avez sélectionnées
                        Les opérateurs de calcul que vous voulez pratiquer
                        Si vous autorisez ou refusez les réponses négatives.
                    </div>
                    <div style={{ margin: "auto", padding: "20px", textAlign: "left"}}>
                        <Image src={ImageExemple} alt=""/>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="grid">
                    <div style={{ margin: "auto", padding: "20px", textAlign: "left"}}>
                        <Image src={ImageParametres} alt=""/>
                    </div>
                    <div style={{ margin: "auto", padding: "20px", textAlign: "left"}}>
                        <div className="purple-border">
                            <h2>Paramètres</h2>
                            Grâce à la page "paramètres", vous pouvez aisément changer les opérateurs de calcul choisis, le nombre de questions et tous les autres paramètres.
                            <br/><br/>
                            De plus, pour vous éviter de devoir choisir vos paramètres à chaque fois que vous voulez pratiquer vos tables, Calcul peut sauvegarder vos préférences pour la prochaine fois !!!
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <button type="button" onClick={handleDownload}>Télécharger Calcul</button>
            </div>
        </div>
    )
}

function handleDownload()
{
    saveAs("/files/setupCalcul.exe", "setupCalcul.exe")
}
