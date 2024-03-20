import "../App.css";
import "../Carousel.css";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import CardArticleAccueil from "../components/CardArticleAccueil";
import CardCdcAccueil from "../components/CardCdcAccueil";
import Carousel from "../components/CarouselAccueil";

import { useState } from "react";
import { Link } from "react-router-dom";

const sneakersTab = [
  {
    imageUrl: "src/assets/Cdc/AF1.jpg",
    name: "Air force 1 - Triple White",
    brand: "Nike",
    logo: "src/assets/Logos_Marques/nike-logo.webp",
    // date: "08/02/2024",
  },
  {
    imageUrl: "src/assets/Cdc/AF1_BR.jpg",
    name: "Air force 1 - Cheery Line",
    brand: "Nike",
    logo: "src/assets/Logos_Marques/nike-logo.webp",
    // date: "14/02/2024",
  },
  {
    imageUrl: "src/assets/Cdc/Jordan_1.jpg",
    name: "Air Jordan High - Baby Blue ",
    brand: "Jordan",
    logo: "src/assets/Logos_Marques/logo-jordan.webp",
    // date: "23/02/2024",
  },
];

const sneakersArticles = [
  {
    imageUrl: "src/assets/Articles/Produit_1.jpeg",
    category: "SNEAKERS",
    name: "Nike Air Max 1 Burgundy Crush",
    url: "",
    content:
      "Ce nouveau design dévoilé par Nike s’articule en trois phases. Tout d’abord, des empiècements en cuir orange recouvrent le upper alors que du daim bordeaux entoure l’ensemble. En guise de fond, on retrouve une base immaculée de façon à bien mettre en valeur la composition bicolore.",
    date: "17/04/2024",
  },
  {
    imageUrl: "src/assets/Articles/Produit_2.jpeg",
    name: "Nike Air Pegasus 2K5 Bicoastal",
    category: "SNEAKERS",
    url: "",
    content:
      "Très appréciée dans les années Y2K, la Air Pegasus s’offre une mise à jour pour son come-back. Renommée « Air Peg 2K5 », celle-ci présente différents matériaux illustrés à l’aide d’un mélange bicolore vert et blanc cassé. Dans les détails, le heeltab rappelle les origines de son design tandis que la languette fait écho à son renouveau. À noter que la version moderne comprend désormais un coussin d’air sur l’avant-pied.",
    date: "17/04/2024",
  },
  {
    imageUrl: "src/assets/Articles/Produit_3.jpeg",
    name: "Nike Air Max Dn Triple Black.",
    url: "",
    category: "SNEAKERS",
    content:
      "Les fans des silhouettes monochromes seront ravis d’apprendre qu’une version full black arrive prochainement. Au-delà de son enveloppe noire, celle-ci présente des branding Nike Dn classiques ainsi que différents pods Dynamic Air semi-translucide. Ces derniers sont d’ailleurs la seule différence notable avec la Air Max Dn Black.",
    date: "17/04/2024",
  },
];

function HomePage() {
  
  const [sneakers, setSneakers] = useState(sneakersTab);
  const [articles, setArticles] = useState(sneakersArticles);

  return (
    <>
      <main>
        <div className="section-introduction has-text-justified m-5	">
          <p>
            Bienvenue sur
            <strong>
              <i> CopOrPass </i>
            </strong>
            ou
            <strong>
              <i> COP </i>
            </strong>
            , c'est comme tu le sens OG. Votre destination ultime pour découvrir
            les
            <strong>
              dernières tendances, les éditions limitées ou encore les
              classiques intemporels de l'univers des sneakers.
            </strong>
            Que vous soyez un passionné de streetwear, un collectionneur
            chevronné ou simplement à la recherche de la paire parfaite pour
            compléter votre style, vous trouverez ici une sélection
            soigneusement choisie des sneakers les plus recherchées et les plus
            convoitées.
            <strong>
              Restez à l'affût des dernières nouveautés, des collaborations
              exclusives et des drops à ne pas manquer grâce à nos mises à jour
              régulières et à notre couverture complète des événements de
              l'industrie.
            </strong>
            Rejoignez notre communauté de passionnés, échangez des avis et des
            recommandations, et plongez dans une expérience immersive où la
            passion pour les sneakers est célébrée sous toutes ses formes.
          </p>
        </div>

        <div className="section-CDC">
          <div className="text-CdC has-text-centered mt-6 mb-4 is-size-3">
            Voici nos <strong> 3 coups de &#128153; </strong>de Février :
          </div>
          <div className="wrapper is-flex is-justify-content-space-around	">
            {sneakers.map((sneaker) => {
              return (
                <CardCdcAccueil
                  key={sneaker.name}
                  imageUrl={sneaker.imageUrl}
                  name={sneaker.name}
                  brand={sneaker.brand}
                  logo={sneaker.logo}
                  date={sneaker.date}
                />
              );
            })}
          </div>
          <div className="button-accueil is-flex is-justify-content-center mt-6 mb-6">
            <Link to="/galerie">
              <button class="button is-info is-light">Voir galerie</button>
            </Link>
          </div>
        </div>

        <div className="section-article_1 has-background-info-light	is-flex mb-6">
          <div className="article-photo">
            <img id="size-photo" src="src/assets/AF1_MCR.jpg" alt="" />
          </div>
          <div className="article-MCR has-text-justified has-text-black p-6">
            <h3 className="titre is-size-5 has-text-centered">
              &#128293; COUP DE COEUR DE CE MOIS &#128293;
            </h3>
            <h2 className="sous-titre is-size-2	has-text-weight-semibold has-text-centered mt-3 mb-4">
              Maison Chateau-
              <i>
                <span id="red">Rouge</span>
              </i>
            </h2>
            <p>
              Derrière la marque de lifestyle parisienne{" "}
              <b>
                <i>Maison Château Rouge</i>
              </b>{" "}
              se cache{" "}
              <b>
                <i>Youssouf Fofana</i>
              </b>
              , un jeune designer qui met en valeur le dynamisme et la richesse
              d'une diaspora africaine contemporaine à Paris. La participation
              de Youssouf à la série{" "}
              <b>
                <i> Air Jordan I Mid « Fearless » </i>
              </b>{" "}
              approfondit sa contribution à la mode afrocentrique du 18e
              arrondissement, au cœur de la street culture parisienne.
            </p>
            <br />
            <p>
              La{" "}
              <b>
                <i> Fearless Air Jordan I Mid </i>
              </b>{" "}
              de Youssouf affiche son assurance avec une empeigne à motifs
              complexes en relief. L'emblématique coloris de la AJI est adouci
              par des couleurs bleu psychédélique et vanille pâle sur
              l'empeigne, pour un fond plus apaisant sous un Swoosh cannelle. Le
              point d'orgue de cette collaboration est la couture rouge faite
              main sur la languette et le talon, une des signatures de Youssouf,
              incorporant ses racines culturelles par un clin d'œil à la
              vannerie et à l'art populaire. En harmonie avec le reste de la
              série
              <b> Fearless</b> d'Air Jordan, cette version{" "}
              <u>reste fidèle à l'OG</u> avec la marque Nike Air sur la
              languette et un logo Jordan Wings épinglé sur le col au niveau de
              la cheville.
            </p>
          </div>
        </div>

        <div className="section-introduction_2 has-text-justified m-5">
          <h3 className="titre-intro-2 is-size-3	has-text-centered has-text-weight-bold	mt-6 mb-4">
            Les sneakers et le streetwear sont à l'honneur
          </h3>
          <p>
            Lancé en 2023,{" "}
            <strong>
              <i>CoP.fr</i>
            </strong>{" "}
            rejoint la course des sites dédiés aux Sneakers et à la Street
            Culture. Si le phénomène sneakers est devenu gigantesque depuis son
            lancement avec une multitude de sorties, de blogs et d’infos, nous
            continuons de suivre notre ligne éditoriale de passionnés.{" "}
            <b>
              Notre équipe traite quotidiennement des sneakers mais également
              des nouvelles tendances urbaines avec une approche lifestyle.{" "}
            </b>{" "}
            Entre l'impact d'Internet sur le marché, les raffles, les scandales
            et la gentrification des produits populaires, nous avons à cœur
            d'aborder tous ces sujets avec vous, sur ce site.{" "}
            <b>Conçue par des passionnés, pour des passionnés, </b>{" "}
            <u>
              retrouvez chaque jour une sélection éclectique de news sur les
              meilleures marques, les dernières sorties mais aussi les
              événements qui nous intéressent.
            </u>{" "}
            Vous trouverez toutes les sorties sur notre site mais ce n'est pas.
            Vous aurez aussi la possibilité d'échanger avec nous sur notre
            chaîne
            <b> Discord</b> ou <b>Twitch</b>.
          </p>
        </div>

        <div className="section-carrousel p-6 has-background-info	mb-6">
          <h3 className="titre-intro-2 has-text-black is-size-3 has-text-weight-bold	mt-2 mb-4">
            &#128293; LAST HOT DROPS &#128293;
          </h3>
          <Carousel />
        </div>

        <div className="section-article_2 has-text-black ml-3 mb-5">
          {articles.map((article) => {
            return (
              <CardArticleAccueil
                key={article.name}
                imageUrl={article.imageUrl}
                category={article.category}
                url={article.url}
                name={article.name}
                content={article.content}
                date={article.date}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}


export default HomePage;
