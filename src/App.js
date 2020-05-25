import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Header from './components/top-header/top-header';
import CveDashboard from './components/cve-dashboard/cve-dashboard-index';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <div className="mainContainer">
          <Header/>
          <CveDashboard/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
