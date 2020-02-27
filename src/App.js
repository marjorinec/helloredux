import React from 'react';
import './App.css';
import { store } from './store/index'
import { addArticle } from './actions/index'

function App() {

  window.store = store
  window.addArticle = addArticle
  
  return (
    <div className="App">
      <header className="App-header">
        djskadhjka
      </header>
    </div>
  );
}

export default App;
