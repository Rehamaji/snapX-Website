import './App.css';
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Hero from "./pages/hero/hero";
/*import {Routes, Route} from "react-router-dom";
import Home from './pages/home/home';
import About from './pages/about/about';*/

function App() {
  return (
      <>
<Navbar/>
<Hero/>
       </>
   /*<Routes>
     <Route path={'/'} element={<Home/>}>Home</Route>
     <Route path={'/about'} element={<About/>}>About</Route>
   </Routes>*/
  );
}

export default App;
