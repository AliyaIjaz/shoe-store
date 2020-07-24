import React from 'react';
import Routes from './Route';
import './App.css';
import  ShoeContextProvider  from './Context/shoesContext';



function App() {
  return (
    <div>
      <ShoeContextProvider>
      <Routes />
      </ShoeContextProvider>
    </div>
  );
}

export default App;
