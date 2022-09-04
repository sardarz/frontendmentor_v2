import React from 'react';
import './App.css';
import Slider from './Slider';
import Toggle from './Toggle';

function App() {
  return (
    <div className="App">
      <div className="main-text">
        <div className="container">
          <div className="main-text-content">
            <h1>Simple, traffic-based pricing</h1>
            <p>Sign-up for our 30-day trial. No credit card required. </p>
          </div>
        </div>
      </div>

      <section className="card">
        <div className="container">
          <div className="card-content">
            <div className="stats">
              <p className="views">100K PAGEVIEWS</p>
              <p className="price"><span> $16.00 </span> / month</p>
            </div>
            <Slider />

            <div className="billing-wrapper">
              <p className="monthly">Monthly Billing</p>
              <Toggle />
              <p className="yearly">Yearly Billing</p>
            </div>

            <div className="about">
              <ul className='list'>
                <li>Unlimited websites</li>
                <li>100% data ownership</li>
                <li>Email reports</li>
              </ul>
              <button className='btn' type='button'>Start my trial</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
