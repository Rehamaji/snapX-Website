import './App.css';
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Hero from "./pages/hero/hero";
import Search from "./component/searchBar/search";
import {Routes, Route} from "react-router-dom";
import Home from './pages/home/home';
import Contests from "./pages/pvContests/contests";
import Categories from "./pages/categories/categories"
import SingleContests from "./pages/pvContests/singleContests";

function App() {
  return (
      <>
   <Routes>
       <Route path={'/'} element={<Home/>}>Home</Route>
       <Route path={'/contests'} element={<Contests/>}>Contests</Route>
       <Route path={'/singleContests'} element={<SingleContests/>}>Single Contests</Route>
       <Route path={'/categories'} element={<Categories/>}>Categories</Route>
       <Route path={'/users'} element={<users/>}></Route>
   </Routes>
         {/* <Home/>*/}
      </>
  );
}

export default App;
