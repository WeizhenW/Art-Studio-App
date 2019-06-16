import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

//import page components
import Home from '../Home/Home';
import ArtList from '../ArtList/ArtList';
import Cart from '../Cart/Cart';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import PurchaseSummary from '../PurchaseSummary/PurchaseSummary';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';


//router
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/artlist" exact component={ArtList} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/customerinfo" exact component={CustomerInfo} />
          <Route path="/summary" exact component={PurchaseSummary} />
          <Route path="/blogs" exact component={Blogs} />

        </Router>

      </div>
    );
  }
}

export default App;
