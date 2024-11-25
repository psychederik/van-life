import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout/HostLayout';
import Home from './pages/Home/Home';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans/HostVans';
import HostVanDetails from './pages/Host/HostVanDetails';
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';
import VanDetails from './pages/VanDetails/VanDetails';

import './server';

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="host" element={<HostLayout />}>
                     <Route index element={<Dashboard />} />
                     <Route path="income" element={<Income />} />
                     <Route path="reviews" element={<Reviews />} />
                     <Route path="vans" element={<HostVans />} />
                     <Route path="vans/:id" element={<HostVanDetails />} />
                  </Route>
                  <Route path="about" element={<About />} />
                  <Route path="vans" element={<Vans />} />
                  <Route path="vans/:id" element={<VanDetails />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;