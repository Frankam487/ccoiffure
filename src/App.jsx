import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Reservations from "./pages/Reservations";
import ServicePage from "./pages/ServicePage1";
import Service2 from "./pages/Service2";
import Service1 from "./pages/Service1";
import ServicePage1 from "./pages/ServicePage1";



const App = () => {
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/service/1" element={<Service1 />} />
  <Route path="/service/2" element={<Service2 />} />
  <Route path="/servicePage/2" element={<ServicePage1 />} />


  <Route path="/reservations" element={<Reservations/>}/>
 </Routes>
 </BrowserRouter>

  );
};

export default App;
