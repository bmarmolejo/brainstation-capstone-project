import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

//Pages
import Homepage from './pages/Homepage';

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
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
  
  export default App;