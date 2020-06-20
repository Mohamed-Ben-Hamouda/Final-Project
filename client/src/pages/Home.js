import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/NavbarComponent'
import React, { useState } from 'react';
import { Affix, Button } from 'antd';


const Home = () => {

    return (
        <div>
            <NavbarComponent />


            <div class="container mor">

                <div class="row">
                    <div class="col"><img src="https://www.who.int/images/default-source/health-topics/coronavirus/map.tmb-768v.jpg" height="220" width="350" />
                    </div>
                    <div class="col"><img width="350" height="220" src="https://www.who.int/images/default-source/searo---images/health-topics/corona-virus19/coronavirus-blue.tmb-549v.jpg" />
                    </div>
                    <div class="col"><h2>Montant total des dons au 1818</h2><br /><iframe id="covidframe"
                        src="https://apis.cni.tn/covid-19/index.html"
                        frameborder="0" scrolling="no"></iframe></div>
                </div>

                <div class="row">
                    <div class="col"><p className="par1">Les pays infecter par le virus covid-19,L'OMS travaille en
                    étroite collaboration avec les experts mondiaux, les gouvernements et les partenaires pour élargir
                    les connaissances scientifiques sur ce nouveau virus, suivre la propagation et la virulence du virus. </p></div>

                    <div class="col"><p className="par2">Se couvrir la bouche et le nez avec le pli du coude ou avec un mouchoir en cas
                    de toux ou d’éternuement – jeter le mouchoir immédiatement après dans une poubelle fermée
                         </p></div>
                    <div class="col"><p>Les données sont mises à jour toutes les 15 minutes</p></div>
                </div>

                <h1>Informations concernant le virus covid-19</h1>


                <legend>Infos... </legend>
                <div className="container-fluid color:red">
                    <div class="row">
                        <div class="col"> <p><i class="far fa-question-circle color:red"></i>Qu'est ce que le Covid-19?</p></div>
                        <div class="col"><p><i class="far fa-question-circle"></i>Quels sont les symptômes du COVID-19?</p></div>
                        <div class="col"><p><i class="far fa-question-circle"></i>Comment se transmet le COVID-19?</p></div>
                    </div>
                    <div class="row">
                        <div class="col"><p className="par1">Le virus identifié en janvier 2020 en Chine est un nouveau Coronavirus. La maladie provoquée par ce Coronavirus a été nommée COVID-19 par l’Organisation mondiale de la Santé – OMS.
                        Depuis le 11 mars 2020, l’OMS qualifie la situation mondiale du COVID-19 de pandémie ; c’est-à-dire que l’épidémie touche désormais 137 pays sur une zone étendue.</p></div>
                        <div class="col"><p className="par2">Les symptômes principaux sont la fièvre ou la sensation de fièvre et des signes de difficultés respiratoires de type toux ou essoufflement.

                        A ce jour, il n’a pas été rapporté de contamination par l’eau. Cette maladie est à transmission respiratoire et probablement de l’animal à l’homme, mais la source n’est pas encore identifiée.</p></div>
                        <div class="col"><p>Les données sont miLa maladie se transmet par les postillons (éternuements, toux). On considère donc qu’un contact étroit avec une personne malade est nécessaire pour transmettre la maladie : même lieu de vie, contact direct à moins d’un mètre lors d’une toux, d’un éternuement ou une discussion en l’absence de mesures de protection. Un des vecteurs privilégiés de la transmission du virus est le contact des mains non lavées.</p></div>
                    </div>
                </div>
                <legend> Quand...Comment...</legend>
                <div className="container-fluid color:red">
                    <div class="row img3">
                        <div class="col"><p><img src="https://covid-19.tn/wp-content/uploads/2019/09/covid19tunisia-fb.png" height="220" width="300" /></p></div>
                        <div class="col"><p><img src="https://covid-19.tn/wp-content/uploads/2020/04/cpvid-19_open_courses.png" height="220" width="300" /></p></div>
                        <div class="col"><p><img src="https://www.businessnews.com.tn/images/album/IMGBN62561sante.jpg" height="220" width="300" /></p></div>
                    </div>
                    <div class="row">
                        <div class="col"><p className="par1">Si vous êtes en bonne santé, vous ne devez utiliser un masque que si vous vous occupez d’une personne présumée infectée par le 2019‑nCoV.
                        Portez un masque si vous toussez ou éternuez.
                        Le masque n’est efficace que s’il est associé à un lavage des mains fréquent avec une solution hydroalcoolique ou à l’eau et au savon.
                        Si vous portez un masque, il est important que vous sachiez l’utiliser et l’éliminer correctement.</p></div>
                        <div class="col"><p className="par2">Le Ministère de la Santé et le bureau de l’Organisation mondiale de la Santé en Tunisie conjuguent leurs efforts
                        pour mieux informer et former les différents acteurs de la santé destinée à tous les professionnels de la santé et au grand public, a été lancée
                        ce vendredi 24 avril 2020.</p></div>
                        <div class="col"><p>À ce jour, aucun médicament spécifique n’est recommandé pour prévenir ou traiter l’infection par le nouveau coronavirus (2019-nCoV).

                        Toutefois, les personnes infectées .</p></div>
                    </div>
                </div>
            </div>
            <div className="container footer" >
                <div>
                    <p >Contact</p>
                    <p>Liens utiles</p>
                    <p>Plan du site</p>
                    <p>Questions fréquentes</p>
                </div>
                <div>
                    <p>Forum</p>
                    <p>Informations pratiques</p>
                    <p>Publication et revues</p>
                    <p>Statistiques sur le site </p>
                </div>
                <div>
                    <p>Inscription Newsletter</p>
                    <input className="cor" type="text" placeholder="Matricule" /><br /><br />
                    <input className="cor" type="text" placeholder="Email" /><br />
                    <Button className="Bo" variant="secondary">S'abonner</Button>

                </div>
                <div>
                    <p>Numéro vert 80 10 19 19</p>
                    <p>Actualité</p>
                    <p>gouvernement</p>
                    <p>2020  République Tunisienne <br /> Covid 19 Tunisia</p>
                </div>

            </div>
            <div className="container fooo">
                <p>Politique de confidentialité © 2020  وزارة الصحة التونسية </p>
            </div>

        </div >
    )
}

export default Home
