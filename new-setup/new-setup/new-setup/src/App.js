import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './pages/Home';
import SinglePackage from "./pages/SinglePackage";
import Package from "./pages/Package";
import PDFGenerate from "./pages/PDFGenerate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/package" element={<Package/>} exact />
            <Route path="/single-package" element={<SinglePackage/>} exact />  
            <Route path="/pdf-generate" element={<PDFGenerate/>} exact />   
          </Routes>
        <Footer/> 
        </BrowserRouter>    
    </div>
  );
}

export default App;
