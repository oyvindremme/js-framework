import React from 'react';
import Home from './pages/Home/Home';
import Grass from './pages/Grass/Grass';
import CardPage from './pages/CardPage/CardPage';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import './scss/style.scss';
import { HashRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/grass" component={Grass} />
      <Route path="/card/:number" component={CardPage} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </HashRouter>
  ); 
}

export default App;
