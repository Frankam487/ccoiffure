import { useNavigate } from 'react-router-dom'; // Assurez-vous que le hook navigate est importé
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { NavLink } from 'react-router-dom';

const Reservations = () => {
  const [map, setMap] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const navigate = useNavigate(); // Hook de navigation

  const cardsData = [
    {
      id: 1,
      message: 'Boxbraids/Twist Men/Large/Medium/small',
      image: '/men1.jpg', // Utilisez le chemin relatif approprié
      description: '1 Stunde 15 Minuten @ 90,00 - 130 CHF',
      coordinates: [5.9631, 10.1591],
    },
    {
      id: 2,
      message: 'Boxbraids/Twist Men/Large/Medium/small',
      image: '/ff.jpg',
      description:
        '1 Stunde 40 Minuten - 7 Stunde 30 Minuten @ 160,00 - 400 CHF',
      coordinates: [5.9641, 10.1601],
    },
    // Ajoutez d'autres cartes ici
  ];

  const mapRef = useRef(null);

  useEffect(() => {
    const mapInstance = L.map(mapRef.current).setView([5.9631, 10.1591], 13);
    setMap(mapInstance);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, []);

  const handleClick = (id) => {
    // Enregistre l'élément sélectionné
    const selected = cardsData.find((card) => card.id === id);
    setSelectedCard(selected);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedCard(null);
  };

  const handleSelect = (id) => {
    // Redirection vers la page du service sélectionné
    navigate(`/service/${id}`);
  };

  return (
    <>
      <div className="reservations">
        <Header />
        <div className="container mx-auto bg-gray-100 md:flex flex-col lg:flex-row p-6 space-y-8 md:space-y-0">
          <div className="first text-center space-y-8 p-6 sm:p-8 w-full max-w-4xl bg-white shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800">
              RESERVATIONS
            </h2>
            <h5 className="text-lg text-gray-500">
              Sécurisez votre rendez-vous.
            </h5>

            <div className="map-container mt-8 w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] shadow-lg overflow-hidden">
              <div id="map" ref={mapRef} className=" h-full w-full"></div>
            </div>
          </div>

          <div className="second -m-10 gap-8 p-6 w-full bg-slate-400 max-w-7xl mx-auto">
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="relative bg-gray-800 mt-1 text-gray-200 p-6 shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xl font-semibold text-cyan-300">
                    {card.message}
                  </div>
                  <button
                    onClick={() => handleClick(card.id)}
                    className="px-3 bg-cyan-600 text-white shadow-md">
                    Auswählen
                  </button>
                </div>
                <div className="text-sm text-gray-400">{card.description}</div>
              </div>
            ))}
          </div>
        </div>

        {isPopupVisible && selectedCard && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-400 z-auto p-6 rounded-lg shadow-lg max-w-md w-full">
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-600">
                ×
              </button>
              <h3 className="text-2xl font-semibold text-gray-800">
                {selectedCard.message}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {selectedCard.description}
              </p>
              <img
                src={selectedCard.image}
                alt={selectedCard.description}
                className="w-full max-w-xs mx-auto rounded shadow-md mt-4"
              />
              <button
                onClick={() => handleSelect(selectedCard.id)}
                className="selection bg-gray-800 text-white p-2 mt-4">
                Sélectionner
              </button>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Reservations;
