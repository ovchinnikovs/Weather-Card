import React from 'react';
import './App.css';

import WeatherCard from '../WeatherCard/index';

function App() {
  return (
    <div className="base">
      <section className="content">
        <WeatherCard />
      </section>
    </div>
  );
}

export default App;
