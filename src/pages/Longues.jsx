import { NavLink } from 'react-router-dom';

const Longues = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full">
        {/* Section Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://example.com/longues.jpg" // Remplace par ton image
            alt="Box Braids Longues"
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Section Titre */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Box Braids Longues
        </h2>

        {/* Section Description */}
        <p className="text-lg text-gray-700 text-center mb-8">
          Les Box Braids Longues sont parfaites pour celles qui recherchent une
          coiffure audacieuse et stylée. Elles offrent une élégance intemporelle
          et peuvent être portées de différentes manières pour s'adapter à
          toutes vos envies.
        </p>

        {/* Section Réservation */}
        <div className="text-center mb-8">
          <NavLink
            to="/reservation" // Remplace par la route vers la réservation ou la page souhaitée
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-semibold rounded-lg hover:scale-105 transition-all">
            Réserver maintenant
          </NavLink>
        </div>

        {/* Section Caractéristiques */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Caractéristiques :
          </h3>
          <ul className="list-disc list-inside text-gray-600 text-left mx-auto max-w-lg">
            <li>Idéales pour un look audacieux et élégant</li>
            <li>Offrent une grande polyvalence de styles</li>
            <li>Longueur permettant différents styles de coiffure</li>
            <li>Durabilité de plusieurs semaines avec peu d'entretien</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Longues;