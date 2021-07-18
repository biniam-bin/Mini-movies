import React from 'react';
import { GlobalStyle } from "./GlobalStyle";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

//import components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

const App = () => 
 (
      <Router>
        <div style={{backgroundColor: "black"}}>
          <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/:movieId" element={<Movie/>}/>
              <Route path='/*' element={<NotFound />}/>        
            </Routes>
          <GlobalStyle/>          
        </div>
      </Router>
);




export default App;
