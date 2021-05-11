//npm install --save react-background-slideshow
//npm install node-sass --save
import React from "react";
import MainRouter from './hoc/MainRouter';
//npm install react-router-dom
import { SearchProvider } from './context/SearchContext';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
    <SearchProvider>
      <div>
          <MainRouter></MainRouter>
      </div>
    </SearchProvider>
    </>
  );
};

export default App;
