import React, {Component} from 'react';
import './Header.css';
import { HashRouter as Router, NavLink } from 'react-router-dom';

class Header extends Component {
    render() {   
        return (
            <div>
                <header>
                    <h1>The Art Studio</h1>
                    <nav>
                        <Router>
                            <NavLink activeClassName="active" exact to="/">Home</NavLink>
                            <NavLink activeClassName="active" to="/artlist" >Art List</NavLink >
                            <NavLink activeClassName="active" to="/cart">Cart</NavLink>
                            <NavLink activeClassName="active" to="/customerinfo">Customer Information</NavLink>
                            <NavLink activeClassName="active" to="/summary">Purchase Summary</NavLink>
                        </Router>
                    </nav>
                </header>
            </div>
        )
    }
}



export default (Header);