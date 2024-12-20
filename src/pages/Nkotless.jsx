import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nkotless = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Twists Classiques',
      message:
        'Les twists classiques, une coiffure élégante et légère pour un look naturel.',
      route: '/nkotless1',
      gradient: 'from-pink-500 to-indigo-500',
    },
    {
      id: 2,
      title: 'Twists Court',
      message:
        'Les twists courts, parfaits pour un entretien facile tout en gardant un look moderne.',
      route: '/nkotless2',
      gradient: 'from-blue-500 to-green-500',
    },
    {
      id: 3,
      title: 'Twists Longs',
      message:
        'Les twists longs, offrant un look audacieux et une grande liberté de style.',
      route: '/nkotless3',
      gradient: 'from-teal-500 to-purple-500',
    },
    {
      id: 4,
      title: 'Twists Pré-étirés',
      message:
        'Des twists avec mèches pré-étirées pour un gain de temps et un confort optimal.',
      route: '/knotless4',
      gradient: 'from-yellow-500 to-red-500',
    },
  ]);

  return (
    <div className="flex justify-center flex-wrap gap-8 p-8">
      {data.map(({ id, title, message, route, gradient }) => (
        <div
          key={id}
          className="bg-white p-6 max-w-xs w-full rounded-lg shadow-md hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
          <p className="text-gray-600 text-center mb-4">{message}</p>
          <NavLink
            to={route}
            className={`inline-block w-full text-center py-2 bg-gradient-to-r ${gradient} text-white rounded-lg hover:scale-105 transition-all`}>
            Voir plus
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Nkotless;
