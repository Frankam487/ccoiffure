import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import List from "../components/List";
import Header from "../components/Header";
import { useEffect, useState } from "react";


const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);


    useEffect(() => {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setIsDarkMode(prefersDark);
    }, []);

    // Changer le mode sombre en fonction de l'état
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };

    // Appliquer la classe 'dark' sur le body
    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [isDarkMode]);
  return (
    <div className="home ">
      <Header />
      <div className="bg-slate-100 home-content">
        <h1>
          Bienvenue
          <br />
          chez <span>house-beauty</span>
        </h1>
        <div className="consignes-container px-22 w-4/5 ">
          <p className=" font-serif text-[13px] py-20 w-full">
            Merci infiniment pour l’intérêt que vous portez à mes services. Afin
            de rendre votre expérience aussi simple qu’agréable, veuillez
            prendre note des informations ci-dessous:
          </p>
          <ul type="square">
            <li>
              Les prix indiqués correspondent aux tresses mi-dos. Si vous
              souhaitez des tresses plus longues, n’oubliez pas d’ajouter
              l’option correspondante à votre réservation.
            </li>
            <li>
              Il est fortement conseillé d'acheter les mèches auprès de nous,
              afin que nous puissions les préparer et ainsi gagner du temps
            </li>
            <li>
              Les couleurs de mèches disponibles sont : 1B, 1, 2 et 4. Si vous
              êtes intéressé(e) par d’autres couleurs de mèches, veuillez nous
              contacter à l\’avance à l'adresse courriel suivante :
              b.expresssaloon@gmail.com
            </li>
            <li>
              Les disponibilités pour le mois suivant s’ouvrent chaque 20 du
              mois en cours.
            </li>
          </ul>
          <h3 className="text-[18px]">NB:</h3>
          <ol>
            <li>
              <span className="text-red-600 font-semibold px-2">1.</span>{' '}
              Veuillez également noter que tous les rendez-vous du matin
              débutent à 8h00 ou 9h00, selon votre sélection.
            </li>

            <li>
              <span className="text-red-600 px-2 font-semibold">2.</span> À
              partir de janvier 2025, les mèches seront incluses dans le prix
            </li>
          </ol>

          <div className="text-center p-4">
            <i className="text-red-600 font-bold">PAIEMENT</i>
          </div>
          <p>
            *Un dépôt de 30 $ (non remboursable) est requis via Interac pour
            confirmer votre rendez-vous.
          </p>
          <h6 className="font-bold">Courriel : b.expresssaloon@gmail.com</h6>
          <h6 className="font-bold">Question : beauty</h6>
          <h6 className="font-bold">Réponse : express</h6>
          <p className="my-4">
            Le solde restant devra être réglé uniquement en espèces le jour du
            rendez-vous. (Le montant du dépôt sera déduit du total final.)
          </p>
          <h3 className="text-[19px] font-semibold my-8">À NE PAS FAIRE :</h3>
          <ul>
            <li>
              Se présenter accompagné d’enfants ou d’amis, sauf exception
              préalable. (L’espace étant limité.)
            </li>
          </ul>
          <h3 className="text-[15px] font-semibold my-8">À FAIRE :</h3>
          <ul>
            <li>Se présenter avec des cheveux propres et bien démêlés.</li>
            <li>
              Pour des{' '}
              <span className="text-black font-semibold">knotless braids</span>,
              il est fortement recommandé de lisser (blow-dry) vos cheveux afin
              d’obtenir un résultat optimal.
            </li>
            <li>
              Arriver à l’heure le jour du rendez-vous. (Tout retard de plus de
              30 minutes entraînera automatiquement l’annulation du
              rendez-vous.)
            </li>
            <li>
              Apporter des mèches prêtes à l’emploi (
              <span className="font-semibold">pré-étirées/pre-stretched</span>).
            </li>
          </ul>

          <div className="my-8">
            <h4 className="text-[16px] my-8">
              Merci de nous avoir choisis, et au plaisir de vous sublimer!
            </h4>
            <h4 className="text-[16px]">À bientôt :)</h4>
          </div>

          <List />
        </div>
        {/* <Reservations /> */}
        <button onClick={() => toggleDarkMode()}>ok</button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;