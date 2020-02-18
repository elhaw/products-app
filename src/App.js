import React from 'react';
import Products from './Products'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <section className="productSection">
        <Products />
      </section>
    );
  }
}

export default App;


