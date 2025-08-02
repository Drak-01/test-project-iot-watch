import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

/*Pages */
import Temperature from "./pages/Temperature"
import Humidity from './pages/Humidity';
import Home from './pages/Home';
import Predictions from './pages/Predictions';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/auth/PrivateRoute';
import Contact from './pages/Contact';

function App() {

  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temperature" 
          element={
            <Temperature />} />
        <Route path="/humidity" element={<Humidity />} />
        <Route path='/predictions' element={<Predictions />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    
  )
}

export default App;
