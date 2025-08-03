import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

/*Pages */
import Temperature from "./pages/Temperature"
import Humidity from './pages/Humidity';
import Home from './pages/Home';
import Predictions from './pages/Predictions';
import History from './pages/History';
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
            <PrivateRoute>
              <Temperature />
            </PrivateRoute>
          } />
        <Route path="/humidity" 
           element={
            <PrivateRoute>
              <Humidity />
            </PrivateRoute>
        } />
        <Route path='/predictions' 
          element={
            <PrivateRoute>
              <Predictions />
            </PrivateRoute>
          } />
          <Route path='/history' 
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
          } />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    
  )
}

export default App;
