import { NavLink } from 'react-router-dom';

const List = () => {


  return (
    <div className="flex justify-center">
      <div className="cards w-full max-w-lg">
        <div className="text text-center mb-8">
          <span className="text-xl font-bold">
            Sélectionner une <br />
            catégorie
          </span>
        </div>
        <div className="bg-white p-4 mb-8 shadow-md">
          {/* Carte 1 */}
          <div className="flex items-center justify-between my-4 p-3 text-black border-b border-gray-300">
            <h3 className="text-[18px] font-semibold">1. BOXBRAIDS</h3>
            <NavLink
              to="/boxbraids"
              className="text-white font-serif bg-gray-900 px-6 py-2 cursor-pointer transition">
              Sélectionner
            </NavLink>
          </div>

          <div className="flex items-center justify-between my-4 p-3 text-black border-b border-gray-300">
            <h3 className="text-[18px] font-semibold">2. TWIST</h3>
            <NavLink
              to="/list2"
              className="text-white font-serif bg-gray-900 px-6 py-2 cursor-pointer transition">
              Sélectionner
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
