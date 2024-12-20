import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Fonction pour générer les dates d'un mois spécifique avec jours, heures et minutes
const generateDatesForMonth = (month, year) => {
  const dates = [];
  const startDate = new Date(year, month, 1); // Le 1er jour du mois
  const endDate = new Date(year, month + 1, 0); // Le dernier jour du mois

  // Ajout des dates au tableau avec heures et minutes
  while (startDate <= endDate) {
    const dateObj = new Date(startDate);
    // Ajout d'heures et minutes, ici on peut choisir des horaires fixes ou les générer dynamiquement
    for (let hour = 9; hour < 18; hour++) {
      // De 9h à 18h
      for (let minute = 0; minute < 60; minute += 30) {
        // Minutes par tranches de 30 minutes
        const timeSlot = new Date(dateObj.setHours(hour, minute, 0, 0));
        dates.push(timeSlot);
      }
    }
    startDate.setDate(startDate.getDate() + 1); // Incrémente la date d'un jour
  }

  return dates;
};

const Reserver = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // On génère les dates pour décembre 2024
  const availableDates = generateDatesForMonth(11, 2024); // Décembre est le mois 11 (0-based)

  // Fonction pour sélectionner une date
  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  // Fonction pour générer l'email avec la date choisie
  const handleEmailRedirection = () => {
    if (selectedDate) {
      const subject = `Réservation Salon de Coiffure - ${selectedDate.toLocaleDateString()}`;
      const body = `Bonjour, je souhaite réserver pour la date suivante : ${selectedDate.toLocaleDateString()} à ${selectedDate.toLocaleTimeString()}.`;
      window.location.href = `mailto:contact@saloncoiffure.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      alert('Veuillez sélectionner une date avant de réserver.');
    }
  };

  // Paramètres de Slider (React Slick)
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    focusOnSelect: true,
    arrows: true, // Afficher les flèches de navigation
  };

  // Fonction pour formater le jour de la semaine
  const formatDay = (date) => {
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
  };

  // Fonction pour formater l'heure et les minutes
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-teal-600 mb-6">
        Choisissez votre date et heure de rendez-vous
      </h1>

      {/* Carrousel de dates */}
      <Slider {...settings} className="w-full max-w-lg">
        {availableDates.map((date, index) => (
          <div key={index} className="flex justify-center">
            <div
              onClick={() => handleDateSelection(date)}
              className={`cursor-pointer p-6 w-60 h-60 bg-gradient-to-r
                ${selectedDate && selectedDate.getTime() === date.getTime() ? 'from-teal-400 to-teal-600 text-white' : 'from-gray-300 to-gray-500 text-gray-700'}
                rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:opacity-90 text-center
                flex flex-col justify-center items-center`}
              role="button"
              aria-label={`Sélectionner la date ${date.toLocaleDateString()}`}>
              <p className="text-lg font-semibold">
                {formatDay(date)} {/* Affiche le jour de la semaine */}
              </p>
              <p className="text-md">
                {date.toLocaleDateString()} {/* Affiche la date */}
              </p>
              <p className="text-sm mt-2">
                {formatTime(date)} {/* Affiche l'heure sélectionnée */}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Bouton de redirection vers l'email */}
      <div className="mt-8">
        <button
          onClick={handleEmailRedirection}
          className={`px-8 py-4 text-white font-semibold rounded-lg shadow-lg
            ${selectedDate ? 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:scale-105' : 'bg-gray-400 cursor-not-allowed'}
            transform transition-all`}
          disabled={!selectedDate}
          aria-disabled={!selectedDate}>
          Réserver par email
        </button>
      </div>

      {/* Message de confirmation si une date est sélectionnée */}
      {selectedDate && (
        <div className="mt-6 text-center text-xl font-semibold text-teal-600">
          <p>
            Vous avez sélectionné le {selectedDate.toLocaleDateString()} à{' '}
            {selectedDate.toLocaleTimeString()}.
          </p>
        </div>
      )}
    </div>
  );
};

export default Reserver;
