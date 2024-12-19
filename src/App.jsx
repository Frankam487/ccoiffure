import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Reservations from './pages/Reservations';

import Service1Details1 from './pages/Service1Details1';
import Reservation from './components/Reservation';
import Boxbraids from './pages/BoxBraids';
import Classiques from './pages/Classiques';
import Courtes from './pages/Courtes';
import Longues from './pages/Longues';
import PreEtirees from './pages/PreEtirees';
import Reserver from './pages/Reserver';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service1Details1/1" element={<Service1Details1 />} />
        <Route path="/boxbraids" element={<Boxbraids />} />
        <Route path="/classiques" element={<Classiques />} />
        <Route path="/courtes" element={<Courtes />} />
        <Route path="/longues" element={<Longues />} />
        <Route path="/preEtirees" element={<PreEtirees />} />
        <Route path="/reserve" element={<Reserver />} />

        <Route path="/reservations" element={<Reservations />} />
        <Route path="/reserver" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
