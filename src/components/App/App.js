import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home';
import ArtList from '../ArtList/ArtList';
import Cart from '../Cart/Cart';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import PurchaseSummary from '../PurchaseSummary/PurchaseSummary';


//router
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <Route path="/" component={Home} />
          <Route path="/artlist" component={ArtList} />
          <Route path="/cart" component={Cart} />
          <Route path="/customerinfo" component={CustomerInfo} />
          <Route path="/summary" component={PurchaseSummary} />
        </Router>
        
      </div>
    );
  }
}

export default App;
