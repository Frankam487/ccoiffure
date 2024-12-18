import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Reservations from "./pages/Reservations";

import Service2 from "./pages/Service2";
import Service1 from "./pages/Service1";

import Service1Details1 from "./pages/Service1Details1";
import Reservation from "./components/Reservation";



const App = () => {
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/service/1" element={<Service1 />} />
  <Route path="/service/2" element={<Service2 />} />
  <Route path="/service1Details1/1" element={<Service1Details1 />} />


  <Route path="/reservations" element={<Reservations/>}/>
  <Route path="/reserver" element={<Reservation/>}/>
 </Routes>
 </BrowserRouter>

  );
};

export default App;
