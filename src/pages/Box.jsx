import { NavLink } from 'react-router-dom';

const Box = () => {
  return (
    <div className="flex justify-center flex-wrap gap-8 p-8">
      {/* Carte 1 */}
      <div className="bg-white p-6 max-w-xs w-full rounded-lg shadow-md hover:shadow-xl transition-all">
        <h3 className="text-xl font-semibold text-center mb-4">
          Box Braids Classiques
        </h3>
        <p className="text-gray-600 text-center mb-4">
          Les tresses box classiques, idéales pour un look naturel et élégant.
        </p>
        <NavLink
          to="/classiques"
          className="inline-block w-full text-center py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-lg hover:scale-105 transition-all">
          Voir plus
        </NavLink>
      </div>

      {/* Carte 2 */}
      <div className="bg-white p-6 max-w-xs w-full rounded-lg shadow-md hover:shadow-xl transition-all">
        <h3 className="text-xl font-semibold text-center mb-4">
          Box Braids Courtes
        </h3>
        <p className="text-gray-600 text-center mb-4">
          Tresses box braids plus courtes, parfaites pour un entretien facile et
          rapide.
        </p>
        <NavLink
          to="/courtes"
          className="inline-block w-full text-center py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:scale-105 transition-all">
          Voir plus
        </NavLink>
      </div>

      {/* Carte 3 */}
      <div className="bg-white p-6 max-w-xs w-full rounded-lg shadow-md hover:shadow-xl transition-all">
        <h3 className="text-xl font-semibold text-center mb-4">
          Box Braids Longues
        </h3>
        <p className="text-gray-600 text-center mb-4">
          Des box braids longues et volumineuses pour un style audacieux.
        </p>
        <NavLink
          to="/longues"
          className="inline-block w-full text-center py-2 bg-gradient-to-r from-teal-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-all">
          Voir plus
        </NavLink>
      </div>

      {/* Carte 4 */}
      <div className="bg-white p-6 max-w-xs w-full rounded-lg shadow-md hover:shadow-xl transition-all">
        <h3 className="text-xl font-semibold text-center mb-4">
          Box Braids Pré-étirées
        </h3>
        <p className="text-gray-600 text-center mb-4">
          Box braids utilisant des mèches pré-étirées pour plus de confort et de
          rapidité.
        </p>
        <NavLink
          to="/preEtirees"
          className="inline-block w-full text-center py-2 bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-lg hover:scale-105 transition-all">
          Voir plus
        </NavLink>
      </div>
    </div>
  );
};

export default Box;
