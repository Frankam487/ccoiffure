import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-green-500 to-teal-600 font-sans leading-normal tracking-normal overflow-hidden">
      {/* Header avec animation et flou sur l'image */}
      <header
        className="text-center py-20 bg-cover bg-center bg-blur-sm"
        style={{
          backgroundImage:
            'url("../../public/logo.jpg")',
        }}>
        <motion.h1
          className="text-5xl font-extrabold text-white tracking-wide shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          Contactez-nous
        </motion.h1>
        <motion.p
          className="text-xl text-white mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}>
          Nous sommes prêts à répondre à toutes vos demandes.
        </motion.p>
      </header>

      {/* Informations de Contact */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          className="lg:flex lg:space-x-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}>
          {/* Informations de Contact */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <motion.h2
              className="text-4xl font-semibold text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
              Nos Coordonnées
            </motion.h2>
            <motion.p
              className="text-gray-200 mt-4 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}>
              Vous pouvez nous joindre par téléphone, email ou nous rendre
              visite dans notre espace bien-être.
            </motion.p>

            <div className="mt-8 space-y-6">
              {['Adresse', 'Téléphone', 'Email'].map((label, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 text-white mt-6 bg-white bg-opacity-10 p-4 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}>
                  <svg
                    className="w-8 h-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    {label === 'Adresse' && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 10l4-4m0 0l4-4m-4 4h12m-4 4h12"
                      />
                    )}
                    {label === 'Téléphone' && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l7-7-7-7m5 7H5"
                      />
                    )}
                    {label === 'Email' && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 4a2 2 0 012-2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4z"
                      />
                    )}
                  </svg>
                  <p className="text-gray-100">
                    {label === 'Adresse' && '123 Rue de la Beauté, Paris'}
                    {label === 'Téléphone' && '(01) 23 45 67 89'}
                    {label === 'Email' && 'contact@beautéparis.com'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <motion.img
              src="../../public/logo.jpg" // Remplacer avec une image réelle
              alt="spa"
              className="rounded-lg shadow-lg w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-400 via-green-500 to-teal-600 text-white text-center py-6 mt-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}>
          &copy; 2024 Salon de Beauté. Tous droits réservés.
        </motion.p>
      </footer>
    </div>
  );
};

export default Contact;
