import React from 'react';
import './App.css';
import AppNavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Routers from './components/routers';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppNavBar/>
          <div className="mainContainer">
            <Routers/>
          </div>
        <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
