import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
