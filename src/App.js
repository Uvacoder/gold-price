import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import {Shop} from './Components/pages/Shop';
import {Cart} from './Components/pages/Auth/Cart';
import Home from './Components/pages/Home/Home';
import Footer from './Components/Footer';
import Login from './Components/pages/Auth/Login';
import Signup from './Components/pages/Auth/Signup';
import { useState } from 'react';

function App() {

  const [logged , setLogged] = useState(false);

  return (
    <>
    <NavBar logged={logged} setLogged={setLogged}/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/shop' element={<Shop />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/login' element={<Login logged={logged} setLogged={setLogged}/>}></Route>
      <Route path='/signup' element={<Signup />}></Route>
    </Routes>
    {/* <Footer /> */}
    </>
  );
}

export default App;
