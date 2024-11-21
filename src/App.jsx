import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Nav from './components/Nav';

function App() {
   return (
      <>
         <BrowserRouter>
            <Nav />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
