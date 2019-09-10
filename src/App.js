import React from 'react';  
import { BrowserRouter } from 'react-router-dom'
import Routes from './Route';

function App() {
  return (
    <BrowserRouter className="App">
      <header >
        <Routes />
      </header>
    </BrowserRouter>  
    );
}

export default App;
