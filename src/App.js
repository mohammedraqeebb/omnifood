import React from 'react';

import './App.scss';

import Navigation from './components/navigation/navigation.component';
import Hero from './components/hero/hero.component';
import Feature from './components/feature/feature.component';
import HowItWorks from './components/how-it-works/how-it-works.component';
import Meals from './components/meals/meals.component';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Feature />
      <HowItWorks />
      <Meals />
    </div>
  );
}

export default App;
