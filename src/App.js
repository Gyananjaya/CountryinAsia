import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Header from './component/Header';
import Referesh from './component/Referesh';
import Countries from './component/Countries';
import Country from './component/Country';
import Footer from './component/Footer';



function App() {
  
  return (
    <div className="app">
      <Router>
        <Header/>
        <Route exact path="/">
          <Referesh/>
          <Countries/>
        </Route>
        
        <Route path="/countries/:name" children={<Country/>}>
          
        </Route>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
