import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Service from "./pages/Service";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/about" element={<About/>} exact />
            <Route path="/service" element={<Service/>} exact />
            <Route path="/contact" element={<Contact/>} exact />  
          </Routes>
        <Footer/> 
        </BrowserRouter>    
    </div>
  );
}

export default App;
