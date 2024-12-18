import Footer from "../components/Footer";
import Header from "../components/Header";
import Reservations from "../pages/Reservations";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home-content">
        <h1>
          Bienvenue
          <br />
          chez nous
        </h1>
        <div className="consignes-container px-22 w-4/5">
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
              contacter à l’avance à l'adresse courriel suivante :
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
              <span className="text-red-600 font-semibold px-2">1.</span> Veuillez
              également noter que tous les rendez-vous du matin débutent à 8h00
              ou 9h00, selon votre sélection.
            </li>

            <li>
              <span className="text-red-600 px-2 font-semibold">2.</span> À partir de
              janvier 2025, les mèches seront incluses dans le prix
            </li>
          </ol>

          <i className="text-red-600 font-bold">PAIEMENT</i>

          <h3>Courriel : b.expresssaloon@gmail.com</h3>
          <h3>Question : beauty</h3>
          <h3>Réponse : express</h3>
          <p>
            Le solde restant devra être réglé uniquement en espèces le jour du
            rendez-vous. (Le montant du dépôt sera déduit du total final.)
          </p>
          <h3>À NE PAS FAIRE :</h3>
          <ul>
            <li>
              Se présenter accompagné d’enfants ou d’amis, sauf exception
              préalable. (L’espace étant limité.)
            </li>
          </ul>
          <h3>À FAIRE :</h3>
          <ul>
            <li>Se présenter avec des cheveux propres et bien démêlés.</li>
            <li>
              Pour des knotless braids, il est fortement recommandé de lisser
              (blow-dry) vos cheveux afin d’obtenir un résultat optimal.
            </li>
            <li>
              Arriver à l’heure le jour du rendez-vous. (Tout retard de plus de
              30 minutes entraînera automatiquement l’annulation du
              rendez-vous.)
            </li>
            <li>
              Apporter des mèches prêtes à l’emploi (pré-étirées/pre-stretched).
            </li>
          </ul>

          <h4>Merci de nous avoir choisis, et au plaisir de vous sublimer!</h4>
          <h4>À bientôt :)</h4>
        </div>
        <Reservations />
      </div>
      <Footer />
    </div>
  );
};

export default Home;