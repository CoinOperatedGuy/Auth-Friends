import React from 'react';
import './App.css';

import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      
      <PrivateRoute />
    </div>
  );
}

export default App;
