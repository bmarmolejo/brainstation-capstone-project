import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

//Pages
import Homepage from './pages/Homepage/Homepage';
import InputPage from './pages/InputPage/InputPage';
import PredictionPage from './pages/PredictionPage/PredictionPage';
import ContactPage from './pages/ContactPage/ContactPage'; 
import SignIn from './pages/SignIn/SignIn'; 


//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

  function App() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/input" element={<InputPage />} />
            <Route path="/enobot" element={<PredictionPage />} />
            <Route path="/contact" element={<ContactPage />} /> 
            <Route path="/signin" element={<SignIn />} /> 
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
  
  export default App;