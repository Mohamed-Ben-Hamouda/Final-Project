import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import NavbarComponent from "../components/NavbarComponent";

const home = () => {
  return (
    <div>
      <NavbarComponent />
      <div class="container mor">
        <div class="row">
          <div class="col">
            <img
              src="https://www.who.int/images/default-source/health-topics/coronavirus/map.tmb-768v.jpg"
              height="220"
              width="350"
            />
          </div>
          <div class="col">
            <img
              width="350"
              height="220"
              src="https://www.who.int/images/default-source/searo---images/health-topics/corona-virus19/coronavirus-blue.tmb-549v.jpg"
            />
          </div>
          <div class="col">
            <h2>Montant total des dons au 1818</h2>
            <br />
            <iframe
              id="covidframe"
              src="https://apis.cni.tn/covid-19/index.html"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <p className="par1">
              Les pays infecter par le virus covid-19,L'OMS travaille en étroite
              collaboration avec les experts mondiaux, les gouvernements et les
              partenaires pour élargir les connaissances scientifiques sur ce
              nouveau virus, suivre la propagation et la virulence du virus, et
              donner des conseils aux pays et aux individus sur les mesures à
              prendre pour protéger la santé et empêcher la propagation de cette
              flambée.{" "}
            </p>
          </div>

          <div class="col">
            <p className="par2">
              Se couvrir la bouche et le nez avec le pli du coude ou avec un
              mouchoir en cas de toux ou d’éternuement – jeter le mouchoir
              immédiatement après dans une poubelle fermée et se laver les mains
              avec une solution hydroalcoolique ou à l’eau et au savon..
            </p>
          </div>
          <div class="col">
            <p>Les données sont mises à jour toutes les 15 minutes</p>
          </div>
        </div>

        <h1>Informations concernant le virus covid-19</h1>

        <legend>Infos... </legend>
        <div className="container-fluid color:red">
          <div class="row">
            <div class="col">
              {" "}
              <p>
                <i class="far fa-question-circle color:red"></i>Qu'est ce que le
                Covid-19?
              </p>
            </div>
            <div class="col">
              <p>
                <i class="far fa-question-circle"></i>Quels sont les symptômes
                du COVID-19?
              </p>
            </div>
            <div class="col">
              <p>
                <i class="far fa-question-circle"></i>Comment se transmet le
                COVID-19?
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p className="par1">
                Le virus identifié en janvier 2020 en Chine est un nouveau
                Coronavirus. La maladie provoquée par ce Coronavirus a été
                nommée COVID-19 par l’Organisation mondiale de la Santé – OMS.
                Depuis le 11 mars 2020, l’OMS qualifie la situation mondiale du
                COVID-19 de pandémie ; c’est-à-dire que l’épidémie touche
                désormais 137 pays sur une zone étendue.
              </p>
            </div>
            <div class="col">
              <p className="par2">
                Les symptômes principaux sont la fièvre ou la sensation de
                fièvre et des signes de difficultés respiratoires de type toux
                ou essoufflement. A ce jour, il n’a pas été rapporté de
                contamination par l’eau. Cette maladie est à transmission
                respiratoire et probablement de l’animal à l’homme, mais la
                source n’est pas encore identifiée.
              </p>
            </div>
            <div class="col">
              <p>
                Les données sont miLa maladie se transmet par les postillons
                (éternuements, toux). On considère donc qu’un contact étroit
                avec une personne malade est nécessaire pour transmettre la
                maladie : même lieu de vie, contact direct à moins d’un mètre
                lors d’une toux, d’un éternuement ou une discussion en l’absence
                de mesures de protection. Un des vecteurs privilégiés de la
                transmission du virus est le contact des mains non lavées.
              </p>
            </div>
          </div>
        </div>
        <legend> Quand...Comment...</legend>
        <div className="container-fluid color:red">
          <div class="row">
            <div class="col">
              {" "}
              <p>
                <i class="far fa-question-circle color:red"></i>Quand utiliser
                un masque ?
              </p>
            </div>
            <div class="col">
              <p>
                <i class="far fa-question-circle"></i>Comment mettre, utiliser,
                enlever et éliminer un masque
              </p>
            </div>
            <div class="col">
              <p>
                <i class="far fa-question-circle"></i>Existe-t-il des
                médicaments spécifiques pour prévenir l'infection par
                coronavirus ?
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p className="par1">
                Si vous êtes en bonne santé, vous ne devez utiliser un masque
                que si vous vous occupez d’une personne présumée infectée par le
                2019‑nCoV. Portez un masque si vous toussez ou éternuez. Le
                masque n’est efficace que s’il est associé à un lavage des mains
                fréquent avec une solution hydroalcoolique ou à l’eau et au
                savon. Si vous portez un masque, il est important que vous
                sachiez l’utiliser et l’éliminer correctement.
              </p>
            </div>
            <div class="col">
              <p className="par2">
                Avant de mettre un masque, se laver les mains avec une solution
                hydroalcoolique ou à l’eau et au savon Appliquer le masque de
                façon à recouvrir le nez et la bouche et veillez à l’ajuster au
                mieux sur votre visage Lorsque l’on porte un masque, éviter de
                le toucher; chaque fois que l’on touche un masque usagé, se
                laver les mains à l’aide d’une solution hydroalcoolique ou à
                l’eau et au savon Lorsqu’il s’humidifie, le remplacer par un
                nouveau masque et ne pas réutiliser des masques à usage unique
                Pour retirer le masque: l’enlever par derrière (ne pas toucher
                le devant du masque); le jeter immédiatement dans une poubelle
                fermée; se laver les mains avec une solution hydroalcoolique ou
                à l’eau et au savon
              </p>
            </div>
            <div class="col">
              <p>
                À ce jour, aucun médicament spécifique n’est recommandé pour
                prévenir ou traiter l’infection par le nouveau coronavirus
                (2019-nCoV). Toutefois, les personnes infectées par le virus
                doivent recevoir des soins appropriés pour soulager et traiter
                les symptômes, et celles qui sont gravement malades doivent
                recevoir des soins de soutien optimisés. Certains traitements
                spécifiques sont à l’étude et seront testés dans le cadre
                d’essais cliniques. L’OMS contribue à accélérer les efforts de
                recherche et de développement avec toute une série de
                partenaires.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer">
        <div>
          <p>Contact</p>
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
          <input type="text" placeholder="Matricule" />
          <br />
          <br />
          <input type="text" placeholder="Email" />
          <br />
          <Button variant="secondary">S'abonner</Button>
        </div>
        <div>
          <p>Numéro vert</p>
          <p>Actualité</p>
          <p>gouvernement</p>
          <p>
            2020 République Tunisienne <br /> Covid 19 Tunisia
          </p>
        </div>
      </div>
      <div className="container fooo">
        <p>Politique de confidentialité © 2020 Ministère de la Santé </p>
      </div>
    </div>
  );
};

export default home;
