import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useContactsQuery } from './services/ContactApi';

function App() {
  const {data, error, isLoading, isFetching, is} = useContactsQuery();
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
