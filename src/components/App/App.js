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

//material ui components
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

//router
import { HashRouter as Router, Route } from 'react-router-dom';

//define theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ef5350'
    },
    secondary: {
      main: '#607d8b'
    },
    error: {
      main: '#c62828'
    }
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Router>
            <Route path="/" exact={true} component={Home} />
            <Route path="/artlist" exact component={ArtList} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/customerinfo" exact component={CustomerInfo} />
            <Route path="/summary" exact component={PurchaseSummary} />
            <Route path="/blogs" exact component={Blogs} />
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
