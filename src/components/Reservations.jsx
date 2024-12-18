import React, { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Medium / Large Box-Braids',
    date: '',
    time: '',
    additionalServices: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedServices = checked
        ? [...prevData.additionalServices, value]
        : prevData.additionalServices.filter((service) => service !== value);
      return { ...prevData, additionalServices: updatedServices };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Réservation envoyée');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Réservez votre rendez-vous
        </h2>

        <div className="mb-6">
          <p className="text-lg text-gray-600">
            Veuillez remplir le formulaire ci-dessous pour réserver votre
            créneau.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="date" className="block text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-6">
            <label htmlFor="time" className="block text-gray-700">
              Heure
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-6">
            <p className="text-lg text-gray-800 font-semibold">
              Services supplémentaires
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="neckLength"
                  value="18- NECK LENGTH"
                  checked={formData.additionalServices.includes(
                    '18- NECK LENGTH'
                  )}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="neckLength" className="text-gray-700">
                  +18- NECK LENGTH (-20,00 $CA)
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="bohoStyle"
                  value="4- BOHO STYLE"
                  checked={formData.additionalServices.includes(
                    '4- BOHO STYLE'
                  )}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="bohoStyle" className="text-gray-700">
                  +4- BOHO STYLE (1 heure à 30,00 $CA)
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="xHair"
                  value="5- X Pression pre-stretched hair 42 pouces (1b or 2)"
                  checked={formData.additionalServices.includes(
                    '5- X Pression pre-stretched hair 42 pouces (1b or 2)'
                  )}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="xHair" className="text-gray-700">
                  +5- X Pression pre-stretched hair (1 minute à 30,00 $CA)
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
              Confirmer la réservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
