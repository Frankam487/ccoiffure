import { useState } from 'react';

const Reserver = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour ouvrir la modale
  const openModal = () => {
    setIsOpen(true);
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Bouton pour ouvrir la modale */}
      <div className="text-center mb-8">
        <button
          onClick={openModal}
          className="inline-block px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-lg font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105">
          Réserver maintenant
        </button>
      </div>

      {/* Modale pour la réservation */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full transform transition-all scale-95 hover:scale-100">
            {/* Header de la modale */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Réservation</h2>
              <button
                onClick={closeModal}
                className="text-2xl text-gray-600 hover:text-gray-800 focus:outline-none">
                ×
              </button>
            </div>

            {/* Formulaire de réservation */}
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-semibold">
                  Nom complet
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Entrez votre nom"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold">
                  Adresse e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Entrez votre e-mail"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-gray-700 text-sm font-semibold">
                  Date du rendez-vous
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-gray-700 text-sm font-semibold">
                  Heure du rendez-vous
                </label>
                <input
                  id="time"
                  type="time"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                  required
                />
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all">
                  Confirmer la réservation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reserver;