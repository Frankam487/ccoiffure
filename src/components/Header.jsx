import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour alterner l'état du menu hamburger
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">Logo</div>

        {/* Menu hamburger pour mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu de navigation pour les écrans plus larges */}
        <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:underline">
                Accueil
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                À propos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <a href="#home" className="hover:underline">
                Accueil
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                À propos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
