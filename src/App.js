import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import './scss/style.scss';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route exact path="/" component={Home} />
    </HashRouter>
  );
}

export default App;
