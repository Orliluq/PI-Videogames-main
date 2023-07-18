import React from "react";
import styles from '../src/App.css';
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/Lading Page/LadingPage.jsx';
import Home from './Components/Home/Home.jsx';
import VideoGameCreate from './Components/Video Games/Create.jsx';
import Details from "./Components/Details/Details.jsx";
import About from "./Components/About/About";
// import PutVideogame from "./Components/PutVideogame/PutVideogame";
import Page404 from "./Components/Page404/Page404";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/videogames' element={<VideoGameCreate />} />
          <Route path='/videogames/:id' element={<Details />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/updatevideogame' element={<PutVideogame />} /> */}
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;