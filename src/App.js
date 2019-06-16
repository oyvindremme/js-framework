import React from 'react';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import './scss/style.scss';
import { HashRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route exact path="/" component={Home} />
    </HashRouter>
  ); 
}

export default App;
