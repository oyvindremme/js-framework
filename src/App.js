import React from 'react';
import Home from './pages/Home/Home';
import CardPage from './pages/CardPage/CardPage';
import Navigation from './components/Navigation/Navigation';
import './scss/style.scss';
import { HashRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/card/:id" component={CardPage} />
    </HashRouter>
  ); 
}

export default App;
