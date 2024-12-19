import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Service1Details1 from './pages/Service1Details1';
import Reservation from './components/Reservation';
import Classiques from './pages/Classiques';
import Courtes from './pages/Courtes';
import Longues from './pages/Longues';
import PreEtirees from './pages/PreEtirees';
import Reserver from './pages/Reserver';
import Box from './pages/Box';
import Twist from './pages/Twist';
import TwistClassique from "./pages/TwistClassique";
import TwistCourt from "./pages/TwistCourt";
import TwistTire from './pages/Twisttire';
import TwistLong from './pages/TwistLong';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/twistCourt" element={<TwistCourt />} />
        <Route path="/twistLong" element={<TwistLong />} />
        <Route path="/twisttire" element={<TwistTire />} />
        <Route path="/service1Details1/1" element={<Service1Details1 />} />
        <Route path="/boxbraids" element={<Box />} />
        <Route path="/classiques" element={<Classiques />} />
        <Route path="/courtes" element={<Courtes />} />
        <Route path="/twistClassique" element={<TwistClassique />} />
        <Route path="/longues" element={<Longues />} />
        <Route path="/preEtirees" element={<PreEtirees />} />
        <Route path="/twist" element={<Twist />} />
        <Route path="/reserver" element={<Reserver />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/reserver" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
