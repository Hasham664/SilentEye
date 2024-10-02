import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Feature from './Pages/Feature/Feature';
import Home from './components/Home/Home';
import Pricing from './Pages/Pricing/Pricing';
import Reviews from './Pages/Reviews/Reviews';
import Contacts from './Pages/Contacts/Contacts';
import Login from './Pages/Login/Login';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/features' element={<Feature />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contact' element={<Contacts />} />
          <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
